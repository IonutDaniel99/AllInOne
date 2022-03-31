import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {globalStyles} from './../../../styles/index.js';

export default function DayNightHoursComponent({ data }) {
    return (
        <View style={styles.container}>
            <View style={styles.container__items}>
                <Text style={styles.text}>Day: {data[0]}</Text>
                <Text style={styles.text}>Night: {data[1]}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },

    container__items: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: globalStyles.font10,
    }
})