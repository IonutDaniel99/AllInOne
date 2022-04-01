import { View, Text, StyleSheet, Linking } from 'react-native'
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { findChineseZodiac, findWesterZodiac } from '../../utils/getZodiac';
import {globalStyles} from './../../styles/index.js';


export default function ZodiacalComponent() {
    const date = new Date();
    const westernZodiac = findWesterZodiac(date);
    const chineseZodiac = findChineseZodiac(date);
    return (
        <View style={styles.container}>
            <View style={styles.container__items}>
                <View style={styles.europe__zodiacal__text__items}>
                    <Text style={styles.europe__zodiacal__text__link} onPress={() => {
                        Linking.openURL(westernZodiac.glossLink);
                    }}>Gloss: {westernZodiac.gloss}</Text>
                    <Text style={styles.europe__zodiacal__text}>Element: {westernZodiac.element}</Text>
                    <Text style={styles.europe__zodiacal__text}>Planet: {westernZodiac.planet}</Text>
                </View>
                <View style={styles.europe__zodiacal__text__icon__items}>
                    <Text style={styles.europe__zodiacal__text}>{westernZodiac.name}</Text>
                    <EntypoIcon name={westernZodiac.symbol} size={20} color={"#ffffff"} />
                    <Text style={styles.europe__zodiacal__text}>{westernZodiac.date}</Text>
                </View>
            </View>
            <View style={styles.border__Gray}></View>
            <View style={styles.container__items}>
                <View style={styles.europe__zodiacal__text__icon__items}>
                    <Text style={styles.europe__zodiacal__text}>{chineseZodiac.zodiac.name}</Text>
                    {/* TODO */}
                    {chineseZodiac.zodiac.symbol}
                    <Text style={styles.europe__zodiacal__text}>
                        {chineseZodiac.lastYear} - {chineseZodiac.year} - {chineseZodiac.nextYear}
                    </Text>
                </View>
                <View style={styles.chinese__zodiacal__text__items}>
                    <Text style={styles.chinese__zodiacal__text__link} onPress={() => {
                        Linking.openURL(chineseZodiac.nextZodiac.nameLink);
                    }}>Next: {chineseZodiac.nextZodiac.name}</Text>
                    <Text style={styles.europe__zodiacal__text}>Element: {chineseZodiac.zodiac.element}</Text>
                    <Text style={styles.europe__zodiacal__text}>Sign: {chineseZodiac.zodiac.sign}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 60,
        maxHeight: 60,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    container__items: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    europe__zodiacal__text: {
        fontSize: globalStyles.fontSmall,
        color: "#fff"
    },
    europe__zodiacal__text__items: {
        alignItems: 'flex-start'
    },
    europe__zodiacal__text__link: {
        fontSize: globalStyles.fontSmall,
        color: "#fff",
        textDecorationLine: 'underline'
    },
    europe__zodiacal__text__icon__items: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    chinese__zodiacal__text__items: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    chinese__zodiacal__text__link: {
        fontSize: globalStyles.fontSmall,
        color: "#fff",
        textDecorationLine: 'underline'
    },
    border__Gray: {
        borderRightWidth: 1,
        borderRightColor: 'gray',
        minHeight: '80%',
        marginVertical: 5,
        marginHorizontal: 5
    },
})