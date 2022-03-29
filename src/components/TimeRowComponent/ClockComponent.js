import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import { StyleSheet, View, Text} from 'react-native'
import { getTimeZoneOffset } from '../../utils/timeUtils';


export default function ClockComponent() {
    const [_newDate, _setNewDate] = useState(new Date());

    useEffect(() => {
      setInterval(() => {
        const d = new Date();
        _setNewDate(d);
      }, 1000) 
    }, [])

    const hour = _newDate.getHours();
    const modified_hour = hour % 12 || 12;
    const [currentHour, setcurrentHour] = useState(0);
    const [currentMin, setcurrentMin] = useState(0);
    const [currentSec, setcurrentSec] = useState(0);
    const [currentAmPM, setcurrentAmPm] = useState(0);
    const [currentTimeZone] = useState(getTimeZoneOffset()); 

    useEffect(()=>{
        setcurrentHour(modified_hour < 10 ? "0" + modified_hour % 12 || 12 : modified_hour)
        setcurrentMin(_newDate.getMinutes())
        setcurrentSec(_newDate.getSeconds())
        setcurrentAmPm(hour >= 12 ? "PM" : "AM")
    },[_newDate])

    return (
        <View style={styles.container__time}>
            <View style={styles.currTime}>
                <Text style={styles.currTime__Text}>
                    {currentHour}:
                    {currentMin < 10 ? '0' + currentMin : currentMin}:
                    {currentSec < 10 ? '0' + currentSec : currentSec}
                </Text>
            </View>
            <View style={styles.container__AmPm__Timezone}>
                <Text style={styles.AmPm}>
                    {currentAmPM}
                </Text>
                <Text style={styles.timeZone}>
                    {currentTimeZone}
                </Text>
            </View>
            <View style={styles.border__Gray__left}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container__time: {
        flex: 0.25,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    currTime: {
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        minWidth: 55,
        maxWidth: 55,
    },
    currTime__Text: {
        color: 'white',
        fontSize: 13,
        marginLeft: 2
    },
    container__AmPm__Timezone: {
        color: 'white',
        flexDirection: 'column',
        fontSize: 12,
    },
    AmPm: {
        color: 'white',
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: 10,
        position: 'relative',
        top: 2,
    },
    timeZone: {
        color: 'white',
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: 10,
        position: 'relative',
        bottom: 2,
    },

    border__Gray__left: {
        borderRightWidth: 1,
        borderRightColor: 'gray',
        minHeight: '80%',
        marginVertical: 5,
        marginLeft: 5,
    },
})
