import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function SunsetSunriseComponents({data}) {
    return (
        <View style={styles.container}>
            <View style={styles.container__items}>
                <Text style={styles.text}>Rise:{data[0]}</Text>
                <Text style={styles.text}>Set:{data[1]}</Text>
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