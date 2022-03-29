import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import { StyleSheet, View, Text} from 'react-native'

export default function DayMonthYearComponent() {
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    const [currentDay, setCurrentDay] = useState();
    const [currentDayName, setCurrentDayName] = useState();
    const [currentMonth, setCurrentMonth] = useState();
    const [currentMonthName, setCurrentMonthName] = useState();
    const [currentYear, setCurrentYear] = useState();
    
    useEffect(() => {
      setInterval(() => {
        const _newDate = new Date();
        setCurrentDay(_newDate.getDate())
        setCurrentDayName(dayName[new Date().getDay()])
        setCurrentMonth(_newDate.getMonth() + 1)
        setCurrentMonthName(monthNames[new Date().getMonth()])
        setCurrentYear(_newDate.getFullYear())
      }, 1000) 
    }, [])



    return (
        <View style={dayMonthYearStyles.container}>
            <View style={dayMonthYearStyles.border__Gray__right}></View>
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
        flex: 0.25,
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
        fontSize: 12,
        position: 'relative',
        bottom: 2,
    },
    border__Gray__right: {
        borderRightWidth: 1,
        borderRightColor: 'gray',
        marginVertical: 5,
        minHeight: '80%',
        marginRight: 5
    },
})