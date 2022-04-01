import React from 'react'
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from './../../../styles/index.js';
import Midnight from 'react-native-midnight'

export default function DayMonthYearComponent() {
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [currentDay, setCurrentDay] = useState(globalStyles.STATIC_TEXT);
    const [currentDayName, setCurrentDayName] = useState(globalStyles.STATIC_TEXT);
    const [currentMonth, setCurrentMonth] = useState(globalStyles.STATIC_TEXT);
    const [currentMonthName, setCurrentMonthName] = useState(globalStyles.STATIC_TEXT);
    const [currentYear, setCurrentYear] = useState(globalStyles.STATIC_TEXT);

    function refreshDate(){
        const _newDate = new Date();
        setCurrentDay(_newDate.getDate())
        setCurrentDayName(dayName[new Date().getDay()])
        setCurrentMonth(_newDate.getMonth() + 1)
        setCurrentMonthName(monthNames[new Date().getMonth()])
        setCurrentYear(_newDate.getFullYear())
    }

    useEffect(() => {
        refreshDate();
        const listener = Midnight.addListener(() => {
            refreshDate();
        })
        return () => listener.remove()
    }, [])



    return (
        <View style={dayMonthYearStyles.container}>
            <View style={dayMonthYearStyles.container__component}>
                <Text style={dayMonthYearStyles.text}>Year</Text>
                <Text style={dayMonthYearStyles.text}>{currentYear}</Text>
            </View>
            <View style={dayMonthYearStyles.container__component}>
                <Text style={dayMonthYearStyles.text}>{currentMonthName}</Text>
                <Text style={dayMonthYearStyles.text}>{currentMonth}</Text>
            </View>
            <View style={dayMonthYearStyles.container__component}>
                <Text style={dayMonthYearStyles.text}>{currentDayName}</Text>
                <Text style={dayMonthYearStyles.text}>{currentDay}</Text>
            </View>
        </View>
    )
}

const dayMonthYearStyles = StyleSheet.create({
    container: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    container__component: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: globalStyles.fontSmall,
        position: 'relative',
        bottom: 2,
    }
})