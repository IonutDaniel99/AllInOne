import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import RNCalendarEvents from "react-native-calendar-events";
import getUnixTime from 'date-fns/getUnixTime';
import { format, fromUnixTime, parseISO } from 'date-fns';
import { showToastShort } from '../../../utils/showToast';
const ERROR_TEXT = "Calendar permission are not satisfied";
const UNIX_MULT = 1000;

export default function CalendarDataComponent() {
    const [calendarPermission, setCalendarPermission] = useState();
    const [calendarPermissionErrorMessage, setCalendarPermissionErrorMessage] = useState('')
    const [calendarEvents, setCalendarEvents] = useState();
    const [lastEvent, setLastEvent] = useState();


    RNCalendarEvents.requestPermissions()
        .then(res => {
            if (res === "authorized") {
                setCalendarPermission(true)
            } else {
                setCalendarPermission(false)
                setCalendarPermissionErrorMessage(ERROR_TEXT)
                showToastShort(ERROR_TEXT)
            }
        })

    useEffect(()=>{
        if(!calendarPermission) return;
        const start = new Date().toISOString();
        const end = new Date(2030, 1, 1, 12, 0, 0).toISOString();
        RNCalendarEvents.fetchAllEvents(start, end).then(data => setCalendarEvents(data));
    },[calendarPermission])

    
    useEffect(() => {
        if (!calendarEvents) return;
        const currentUnixTime = getUnixTime(new Date()) * UNIX_MULT;
        var time_target = 9650654633 * UNIX_MULT;
        var last_event = {};
        for (var i = 0; i < calendarEvents.length; i++) {
            const event_time = getUnixTime(parseISO(calendarEvents[i].startDate)) * UNIX_MULT
            if (currentUnixTime < event_time && event_time < time_target) {
                if (event_time < time_target) {
                    time_target = event_time
                    last_event = calendarEvents[i];
                }
            }
        }
        setLastEvent(last_event)
    }, [calendarEvents])


    return (
        <View style={styles.container}>
            
            {(calendarPermission && lastEvent) && <Text>work</Text>}
            {!calendarPermission && <Text>false</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
})