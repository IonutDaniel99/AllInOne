import { StyleSheet, Text, View } from 'react-native'
import {globalStyles} from './../../../styles/index.js';
import React from 'react'


export default function SunsetSunriseComponents({data}) {
    return (
        <View style={styles.container}>
            <View style={styles.container__items}>
                <Text style={styles.text}>Rise: {data[0]}</Text>
                <Text style={styles.text}>Set: {data[1]}</Text>
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
        fontSize: globalStyles.fontSmall,
    }
})