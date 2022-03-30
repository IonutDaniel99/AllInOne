import { View, Text } from 'react-native'
import React from 'react'

export default function LocalizationRowComponent({gpsData}) {
  return (
    <View>
      <Text>{console.log(gpsData)}</Text>
    </View>
  )
}