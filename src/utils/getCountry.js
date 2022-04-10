import ConutryData from './../data/country_info.json';
import CountryPoly from './../data/country_poly.json';

function isLeft(p0, p1, p2) {
  return ((p1[0] - p0[0]) * (p2[1] - p0[1])
    - (p2[0] - p0[0]) * (p1[1] - p0[1]));
}

function inPoly(p, coord) {
  var winding = 0;
  for (var i = 0; i < coord.length - 1; i++) {
    if (coord[i][1] <= p[1]) {
      if (coord[i + 1][1] > p[1]) {
        if (isLeft(coord[i], coord[i + 1], p) > 0) {
          ++winding;
        }
      }
    } else {
      if (coord[i + 1][1] <= p[1]) {
        if (isLeft(coord[i], coord[i + 1], p) < 0) {
          --winding;
        }
      }
    }
  }
  return winding;
}

/**
 * 
 * @param {Array} p Long & Lat coords
 * @returns 
 */
export async function getCountry(p) {
  var country;
  return CountryPoly.feat.some(function (obj) {
    country = obj;
    var polygons = obj.geometry.coordinates;
    if (obj.geometry.type !== 'MultiPolygon') polygons = [polygons];
    return polygons.some(function (polygon) {
      return inPoly(p, polygon[0]);
    });
  }) ? country.properties.name : null;
}

export function getCountryPolygon(countryName){
  var country;
  return CountryPoly.feat.some(function (obj) {
    country = obj;
    if(obj.properties.name === countryName){
      var polygons = obj.geometry.coordinates;
      // if (obj.geometry.type !== 'MultiPolygon') polygons = [polygons];
      return polygons;
    }
  }) ? country.geometry.coordinates[0] : [];
}

export function getCountryInfo(name) {
  for (const property in ConutryData) {
    if(name === property){
      return ConutryData[property];
    }
  }
}

