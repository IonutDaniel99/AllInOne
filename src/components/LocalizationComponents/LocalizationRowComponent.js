import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { getCountry, getCountryInfo } from '../../utils/getCountry';

export default function LocalizationRowComponent({ gpsData }) {
  const lat = gpsData.coords.latitude;
  const long = gpsData.coords.longitude;

  const [country, setCountry] = useState({});

  async function getCountryName() {
    const countryName = await getCountry([long, lat]);
    setCountry(getCountryInfo(countryName))
  }
  getCountryName();

  //   "Afghanistan": {
  //     "name": "Afghanistan",
  //     "abbreviation": "AF",
  //     "capital": "Kabul",
  //     "currency_abb": "AFN",
  //     "currency_full": "Afghanistan Afghani",
  //     "population": 37172386
  // },

  return (
    <View>
      <View style={styles.main__component}>
        <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text>{country.abbreviation}</Text>
          <Text>{country.currency_abb}</Text>
          <Text>{country.population}</Text>
        </View>
        <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text>{country.name}</Text>
          <Text>{country.capital}</Text>
        </View>
        <View style={{ flex: 0.3, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <Text>Country Scheme</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main__component: {
    minHeight: 40,
    maxHeight: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  }
});