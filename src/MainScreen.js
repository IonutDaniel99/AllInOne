import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import TimeRowComponent from './components/TimeRowComponents/TimeRowComponent'

import { getLocation } from './utils/permissions.js';
import { showToastShort } from './utils/toast';
import ZodiacalRowComponent from './components/ZodiacalRowComponents/ZodiacalRowComponent';
import LoadingComponent from './reusableComponents/LoadingComponent';
import LocalizationRowComponent from './components/LocalizationComponents/LocalizationRowComponent';

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
      {/* {gpsData ? <TimeRowComponent gpsData={gpsData}/> : <LoadingComponent height={80}/>} */}
      <View style={styles.border__Gray__bottom}></View>
      {/* <ZodiacalRowComponent /> */}
      <View style={styles.border__Gray__bottom}></View>
      {gpsData ? <LocalizationRowComponent gpsData={gpsData}/> : <LoadingComponent height={50}/>}
      
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
    marginVertical: 1,
    marginHorizontal: 5
  },
})