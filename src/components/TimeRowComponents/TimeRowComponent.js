/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { intervalToDuration } from 'date-fns';
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import format from 'date-fns/format';


import ClockComponent from './subComps/ClockComponent.js';
import DayMonthYearComponent from './subComps/DayMonthYearComponent.js';
import SunsetSunriseComponents from './subComps/SunsetSunriseComponents';
import DayNightHoursComponent from './subComps/DayNightHoursComponent';
import SeasonDisplayComponent from './subComps/SeasonDisplayComponent';
import CalendarDataComponent from './subComps/CalendarDataComponent';

export default function TimeRowComponent({gpsData}) {
  const [sunriseDate, setSunriseDate] = useState();
  const [sunsetDate, setSunsetDate] = useState();

  const [sunset, setSunset] = useState("-");
  const [sunrise, setSunrise] = useState("-");

  const [dayTime, setDayTime] = useState('-');
  const [nightTime, setNightTime] = useState('-');

  useEffect(() => {
    const lat = gpsData.coords.latitude;
    const long = gpsData.coords.longitude;
    setSunriseDate(getSunrise(lat, long));
    setSunsetDate(getSunset(lat, long));
  }, [gpsData]);

  useEffect(() => {
    if (!sunriseDate || !sunsetDate) return;
    setSunrise(format(sunriseDate, "hh:mm aaa"));
    setSunset(format(sunsetDate, "hh:mm aaa"));
    const dayHour = intervalToDuration({ start: new Date(sunriseDate), end: new Date(sunsetDate) })
    const template = { "days": 0, "hours": 23, "minutes": 59, "months": 0, "seconds": 0, "years": 0 };
    setDayTime(`${dayHour.hours}:${dayHour.minutes}`);
    setNightTime(`${template.hours - dayHour.hours}:${template.minutes - dayHour.minutes}`);
  }, [sunriseDate, sunsetDate])

  return (
    <View>
      <View style={styles.TimeRowComponent}>
        <ClockComponent />
        <View style={styles.border__Gray}></View>
        <CalendarDataComponent />
        <View style={styles.border__Gray}></View>
        <DayMonthYearComponent />
      </View>
      <View style={styles.TimeRowComponent}>
        <SunsetSunriseComponents data={[sunrise, sunset]} />
        <View style={styles.border__Gray}></View>
        <SeasonDisplayComponent />
        <View style={styles.border__Gray}></View>
        <DayNightHoursComponent data={[dayTime, nightTime]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TimeRowComponent: {
    minHeight: 40,
    maxHeight: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  border__Gray: {
    borderRightWidth: 1,
    borderRightColor: 'gray',
    minHeight: '80%',
    marginVertical: 5,
    marginHorizontal: 5
  },
})

