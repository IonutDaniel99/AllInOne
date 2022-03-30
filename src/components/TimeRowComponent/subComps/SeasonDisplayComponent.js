import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FaIcon5 from 'react-native-vector-icons/FontAwesome5';

export default function SeasonDisplayComponent() {

    var mine = Date.getSeasons();
    var today = new Date(); //Date.parse('Mar 21, 2014'); //use Date.parse() to check dates other than today
    var firstSpring = mine[1];
    var firstSummer = mine[2];
    var firstFall = mine[3];
    var firstWinter = mine[4];
    var season = '';
    const color = {
        "white": '#bfbfbf',
        "spring": '#afffa8',
        "summer": '#ffd700',
        "fall": '#ff7070',
        "winter": '#3392ff',
    }
    if (today >= firstSpring && today < firstSummer) {
        season = 'spring';
    } else if (today >= firstSummer && today < firstFall) {
        season = 'summer';
    } else if (today >= firstFall && today < firstWinter) {
        season = 'fall';
    } else if (today >= firstWinter || today < firstSpring) {
        season = 'winter';
    }

    return (
        <View style={styles.container}>
            <View style={styles.container__items}>
                <EntypoIcon name="flower" size={15} color={season === "spring" ? color.spring : color.white} />
                <Text style={styles.text}>Spring</Text>
            </View>
            <View style={styles.container__items}>
                <FaIcon5 name="sun" size={15} color={season === "summer" ? color.summer : color.white} />
                <Text style={styles.text}>Summer</Text>
            </View>
            <View style={styles.container__items}>
                <EntypoIcon name="leaf" size={15} color={season === "fall" ? color.fall : color.white} />
                <Text style={styles.text}>Autumn</Text>
            </View>
            <View style={styles.container__items}>
                <FaIcon5 name="snowflake" size={15} color={season === "winter" ? color.winter : color.white} />
                <Text style={styles.text}>Winter</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row'
    },

    container__items: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 10,
    },
    border__Gray__left: {
        borderRightWidth: 1,
        borderRightColor: 'gray',
        marginVertical: 5,
        minHeight: '80%',
    }
})