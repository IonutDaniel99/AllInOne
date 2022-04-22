import flagIcons from '../../molecules/icons/flagIcons'
import blankCountries from '../../molecules/icons/blankCountries'
import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getCountry, getCountryInfo } from '../../utils/getCountry';
import { globalStyles } from './../../styles/index.js';
import WarningComponent from '../../reusableComponents/WarningComponent';

export default function LocalizationRowComponent({ gpsData }) {
  const lat = gpsData.coords.latitude;
  const long = gpsData.coords.longitude;

  const [country, setCountry] = useState();
  const [flagPath, setFlagPath] = useState("");

  async function getCountryName() {
    await getCountry([long, lat]).then(data => {
      setCountry(getCountryInfo(data))
    });
  }
  getCountryName();

  useEffect(() => {
    if (!country) return;
    const path = country.abbreviation;
    setFlagPath(path);
  }, [country])

  function convertToMilions(labelValue, type) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9
      ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(type === "pop" ? 2 : 0) + "B"
      // Six Zeroes for Millions 
      : Math.abs(Number(labelValue)) >= 1.0e+6
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(type === "pop" ? 2 : 0) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
          ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(type === "pop" ? 2 : 0) + "K"
          : Math.abs(Number(labelValue));

  }

  return (
    <View>
      {country ?
        <View style={styles.main__component}>
          <View style={{ flex: 0.33, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text style={styles.text}>Currency: {country.currency_abb}</Text>
            <Text style={styles.text}>Surface: {convertToMilions(country.area, "area")} km²</Text>
            <Text style={styles.text}>Population: ~{convertToMilions(country.population, "pop")}</Text>
          </View>
          <View style={{ flex: 0.34, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text style={styles.text__center}>{country.name} ({country.abbreviation})</Text>
            {flagPath ?
              <Image source={flagIcons[flagPath.toLowerCase()]} style={{ width: 20, height: 20 }} />
              :
              <Text style={styles.text}>?</Text>
            }
            <Text style={styles.text}>{country.capital}</Text>
          </View>
          <View style={{ flex: 0.33, justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Text style={styles.text}>Country map</Text>
            <Image source={blankCountries[flagPath.toLowerCase()]} style={{ width: 36, height: 36, tintColor: "white" }} />
          </View>
        </View>
        :
        <WarningComponent text={"Can't find current country!"} height={30} fontSize={globalStyles.fontMedium}/>
      } 
    </View>
  )
}

const styles = StyleSheet.create({
  main__component: {
    minHeight: 60,
    maxHeight: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: globalStyles.fontSmall,
  },
  text__center: {
    color: 'white',
    fontSize: globalStyles.fontSmall,
    textAlign: 'center'
  }
});