import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import TimeRowComponent from './components/TimeRowComponent/TimeRowComponent'
import LocalizationRowComponent from './components/LocalizationComponents/LocalizationRowComponent'

import { getLocation } from './utils/permissions.js';
import { showToastShort } from './utils/toast';

export default function MainScreen() {
  const [gpsData, setGpsData] = useState();

  useEffect(() => {
    async function getCoords() {
      return await getLocation();
    }
    getCoords().then(data => setGpsData(data)).catch(error => showToastShort(error.message))
  }, [])

  console.log(gpsData)

  return (
    <View style={styles.mainScreen}>
      {gpsData ? <TimeRowComponent gpsData={gpsData}/> : <Text>Loading</Text>}
      {gpsData ? <LocalizationRowComponent gpsData={gpsData}/> : <Text>Loading</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    marginHorizontal: 5
  }
})