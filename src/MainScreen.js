import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TimeRowComponent from './components/TimeRowComponent/TimeRowComponent'
import LocalizationRowComponent from './components/LocalizationComponents/LocalizationRowComponent'

export default function MainScreen() {
  
  return (
    <View style={styles.mainScreen}>
      <TimeRowComponent />
      <LocalizationRowComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    marginHorizontal: 5
  }
})