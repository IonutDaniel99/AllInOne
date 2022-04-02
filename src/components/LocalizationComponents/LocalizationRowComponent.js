import { View, Text } from 'react-native'
import React from 'react'
import { getCountry } from '../../utils/getCountry';

export default function LocalizationRowComponent({gpsData}) {
  const lat = gpsData.coords.latitude;
  const long = gpsData.coords.longitude;
  getCountry(lat,long)
  return (
    <View>
      <Text>Manele</Text>
    </View>
  )
}