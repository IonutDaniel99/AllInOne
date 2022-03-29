/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import ClockComponent from './ClockComponent.js';
import DayMonthYearComponent from './DayMonthYearComponent.js';
import SunsetSunriseComponents from './SunsetSunriseComponents';

import { getLocation } from '../../utils/permissions.js';
import { showToastShort } from '../../utils/toast';
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import format from 'date-fns/format';
import { intervalToDuration } from 'date-fns';

export default function TimeRowComponent() {
  const [gpsData, setGpsData] = useState();
  const [sunriseDate, setSunriseDate] = useState();
  const [sunsetDate, setSunsetDate] = useState();

  const [sunset, setSunset] = useState("-");
  const [sunrise, setSunrise] = useState("-");

  const [dayTime, setDayTime] = useState('-');
  const [nightTime, setNightTime] = useState('-');

  useEffect(() => {
    async function getCoords() {
      return await getLocation();
    }
    getCoords().then(data => setGpsData(data)).catch(error => showToastShort(error.message))
  }, [])

  useEffect(() => {
    if (!gpsData) return;
    const lat = gpsData.coords.latitude;
    const long = gpsData.coords.longitude;
    setSunriseDate(getSunrise(lat, long));
    setSunsetDate(getSunset(lat, long));
  }, [gpsData]);

  useEffect(()=>{
    if(!sunriseDate || !sunsetDate) return;
    setSunrise(format(sunriseDate, "hh:mm aaa"));
    setSunset(format(sunsetDate, "hh:mm aaa"));
    const dayHour = intervalToDuration({start: new Date(sunriseDate), end: new Date(sunsetDate)})
    const nightHour = intervalToDuration({start: new Date(0,0,0,24,0,0,0), end: new Date(sunriseDate)})

    setDayTime(`${dayHour.hours}:${dayHour.minutes}`);
    setNightTime(`${nightHour.hours}:${nightHour.minutes}`);
  },[sunriseDate,sunsetDate])

  return (
    <View>
      <View style={styles.TimeRowComponent}>
        <ClockComponent />
        <View style={{ flex: 0.4 }}>
          <Text>Next Event</Text>
        </View>
        <DayMonthYearComponent />
      </View>
      <View style={styles.TimeRowComponent}>
        <SunsetSunriseComponents style={{ flex: 0.25 }} data={[sunrise, sunset]} />
        <View style={{ flex: 0.4 }}>
          <Text>Next Event</Text>
        </View>
        <View style={{ flex: 0.25 }}>
          <Text>{dayTime}{nightTime}</Text>
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

