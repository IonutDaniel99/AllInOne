import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import TimeRowComponent from './components/TimeRowComponents/TimeRowComponent'

import { getLocation } from './utils/reqPermissions';
import { showToastShort } from './utils/showToast';
import ZodiacalRowComponent from './components/ZodiacalRowComponents/ZodiacalRowComponent';
import LoadingComponent from './reusableComponents/LoadingComponent';
import WarningComponent from './reusableComponents/WarningComponent';
import LocalizationRowComponent from './components/LocalizationComponents/LocalizationRowComponent';
import { globalStyles } from './styles';

export default function MainScreen() {
  const [gpsData, setGpsData] = useState();
  const [gpsError, setGpsError] = useState(false);
  const [gpsErrorMessage, setGpsErrorMessage] = useState('')

  useEffect(() => {
    async function getCoords() {
      return await getLocation();
    }
    getCoords()
      .then(data => setGpsData(data))
      .catch(error => {
        showToastShort(error.message);
        setGpsErrorMessage(error.message)
        setGpsError(true)
      })
  }, [])

  return (
    <View style={styles.mainScreen}>
      {gpsData ? <TimeRowComponent gpsData={gpsData} />
        : <>
          {!gpsError ? <LoadingComponent height={30} />
            : <WarningComponent fontSize={globalStyles.fontMedium} height={30} text={gpsErrorMessage} />
          }
        </>
      }
      <View style={styles.border__Gray__bottom}></View>
      <ZodiacalRowComponent />
      <View style={styles.border__Gray__bottom}></View>
      {gpsData ? <LocalizationRowComponent gpsData={gpsData} />
        : <>
          {!gpsError ? <LoadingComponent height={30} />
            : <WarningComponent fontSize={globalStyles.fontMedium} height={30} text={gpsErrorMessage} />
          }
        </>
      }
      <View style={styles.border__Gray__bottom}></View>

      
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