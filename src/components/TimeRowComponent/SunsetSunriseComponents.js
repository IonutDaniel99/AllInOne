import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getLocation } from '../../utils/permissions.js';
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import format
    from 'date-fns/format';
export default function SunsetSunriseComponents() {
    const [sunset, setSunset] = useState(0);
    const [sunrise, setSunrise] = useState(0);
    const [gps, setGps] = useState(0);

    useEffect(() => {
        async function getCoords() {
            const data = await getLocation();
            return data;
        }
        getCoords().then(data => setGps(data))
    }, [])

    useEffect(()=>{
        if (!gps) return;
        const lat = gps.coords.latitude;
        const long = gps.coords.longitude;
        setSunrise(format(getSunrise(lat, long), "h:mm aaa"));
        setSunset(format(getSunset(lat, long), "h:mm aaa"));
    },[gps])
    


    return (
        <View style={styles.container}>
            <View style={styles.container__items}>
                <Text style={styles.text}>Sunrise:{sunrise}</Text>
                <Text style={styles.text}>Sunset:{sunset}</Text>
            </View>
            <View style={styles.border__Gray__right}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        flexDirection: 'row',
    },

    container__items: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    text: {
        color: 'white',
        fontSize: 12,
    },
    border__Gray__right: {
        borderRightWidth: 1,
        borderRightColor: 'gray',
        marginVertical: 5,
        minHeight: '80%',
        marginRight: 5,
    }
})