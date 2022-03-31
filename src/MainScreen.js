import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import TimeRowComponent from './components/TimeRowComponent/TimeRowComponent'
import LocalizationRowComponent from './components/LocalizationComponents/LocalizationRowComponent'

import { getLocation } from './utils/permissions.js';
import { showToastShort } from './utils/toast';
import ZodiacalComponent from './components/ZodiacalComponents/ZodiacalComponent';

export default function MainScreen() {
  const [gpsData, setGpsData] = useState();

  useEffect(() => {
    async function getCoords() {
      return await getLocation();
    }
    getCoords().then(data => setGpsData(data)).catch(error => showToastShort(error.message))
  }, [])

  return (
    <View style={styles.mainScreen}>
      {gpsData ? <TimeRowComponent gpsData={gpsData}/> : <Text>Loading</Text>}
      <View style={styles.border__Gray__bottom}></View>
      <ZodiacalComponent />
      <View style={styles.border__Gray__bottom}></View>
      {/* {gpsData ? <LocalizationRowComponent gpsData={gpsData}/> : <Text>Loading</Text>} */}

    </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    marginHorizontal: 5
  },

  border__Gray__bottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    minWidth: '80%',
    height: 2,
    marginVertical: 5,
    marginHorizontal: 5
  },
})