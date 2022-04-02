import ContryCoords from './../data/coords.json';
import ContryData from './../data/country.json';

export function getCountry(lat, long) {
    var ns = [];
    var we = [];
    var name = "";

    for (const property in ContryCoords) {
        for (const [key, value] of Object.entries(ContryCoords[property])) {
            ns.push(ContryCoords[property]['ns'])
            we.push(ContryCoords[property]['we'])
        }
    }
    console.log(lat,long)
    const ns_close = ns.reduce((prev, curr) => Math.abs(curr - lat) < Math.abs(prev - lat) ? curr : prev);
    const we_close = we.reduce((prev, curr) => Math.abs(curr - long) < Math.abs(prev - long) ? curr : prev);
    
    for (const property in ContryCoords) {
        for (const [key, value] of Object.entries(ContryCoords[property])) {
            if(ContryCoords[property]['ns'] === ns_close){
                console.log(ContryCoords[property]) //TODo
            }
            // if (ContryCoords[property]['we'] === we_close && ContryCoords[property]['ns'] === ns_close) {
            //     name = ContryCoords[property]['name']
            // }
        }
    }

    for (const property in ContryData) {
        if(property === name){
            var object = ContryData[property];
            var nsc = "";
            var wec = "";
            if(lat>0.00001){
                nsc = "°N";
            }else{
                nsc = "°S";
            }
            if(long>0.00001){
                wec = "°E";
            }else{
                wec = "°V";
            }
            object['lat'] = lat.toString() + nsc;
            object['long'] = long.toString() + wec;
            return object;
        }
    }
}


