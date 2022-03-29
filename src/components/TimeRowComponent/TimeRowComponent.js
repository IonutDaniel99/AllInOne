/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import ClockComponent from './ClockComponent.js';
import DayMonthYearComponent from './DayMonthYearComponent.js';
import SunsetSunriseComponents from './SunsetSunriseComponents';

export default function TimeRowComponent() {
  return (
    <View>
      <View style={styles.TimeRowComponent}>
        <ClockComponent />
        <View style={{ flex: 0.4 }}>
          <Text>Next Event</Text>
        </View>
        <DayMonthYearComponent/>
      </View>
      <View style={styles.TimeRowComponent}>
        <SunsetSunriseComponents style={{ flex: 0.25 }}/>
        <View style={{ flex: 0.4 }}>
          <Text>Next Event</Text>
        </View>
        <View style={{ flex: 0.25 }}>
          <Text>Next Event</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TimeRowComponent: {
    minHeight: 40,
    maxHeight: 40,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
})

