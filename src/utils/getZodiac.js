
import React from 'react';
import { Image } from 'react-native'


export function findWesterZodiac(date) {
    const days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    const signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
    let month = date.getMonth();
    let day = date.getDate();
    if (month == 0 && day <= 20) {
        month = 11;
    } else if (day < days[month]) {
        month--;
    };
    return WesternZodiac[signs[month]];
};

export function findChineseZodiac(date) {
    const year = date.getFullYear();
    const signs = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat","Monkey", "Rooster", "Dog", "Pig", ];
    return {
        zodiac: ChineseZodiac[signs[(year-4) % 12]],
        lastYear: year - 12,
        year: year,
        nextYear: year + 12,
        nextZodiac: ChineseZodiac[signs[((year-4) % 12)+1]]
    }
}

const WesternZodiac = {
    "Aries": {
        name: "Aries",
        gloss: "The Ram",
        glossLink: "https://en.wikipedia.org/wiki/Sheep",
        symbol: "zodiac-aries",
        date: "Mar 21 - Apr 19",
        element: "Fire",
        planet: "Mars"
    },
    "Taurus": {
        name: "Taurus",
        gloss: "The Bull",
        glossLink: "https://en.wikipedia.org/wiki/Bull",
        symbol: "zodiac-taurus",
        date: "Apr 20 - May 20",
        element: "Earth",
        planet: "Venus"
    },
    "Gemeni": {
        name: "Gemeni",
        gloss: "The Twins",
        glossLink: "https://en.wikipedia.org/wiki/Twin",
        symbol: "zodiac-gemini",
        date: "May 21 - Jun 21",
        element: "Air",
        planet: "Mercury"
    },
    "Cancer": {
        name: "Cancer",
        gloss: "The Crab",
        glossLink: "https://en.wikipedia.org/wiki/Crab",
        symbol: "zodiac-cancer",
        date: "Jun 22 - Jul 22",
        element: "Water",
        planet: "Moon"
    },
    "Leo": {
        name: "Leo",
        gloss: "The Lion",
        glossLink: "https://en.wikipedia.org/wiki/Lion",
        symbol: "zodiac-leo",
        date: "Jul 23 - Aug 22",
        element: "Fire",
        planet: "Sun"
    },
    "Virgo": {
        name: "Virgo",
        gloss: "The Maiden",
        glossLink: "https://en.wikipedia.org/wiki/Maiden",
        symbol: "zodiac-virgo",
        date: "Aug 23 - Sep 22",
        element: "Earth",
        planet: "Mercury"
    },
    "Libra": {
        name: "Libra",
        gloss: "The Scales",
        glossLink: "https://en.wikipedia.org/wiki/Weighing_scale",
        symbol: "zodiac-libra",
        date: "Sep 23 - Oct 22",
        element: "Air",
        planet: "Venus"
    },
    "Scorpio": {
        name: "Scorpio",
        gloss: "The Scorpion",
        glossLink: "https://en.wikipedia.org/wiki/Scorpion",
        symbol: "zodiac-scorpio",
        date: "Oct 23 - Nov 22",
        element: "Water",
        planet: "Pluto/Mars"
    },
    "Sagittarius": {
        name: "Sagittarius",
        gloss: "The Centaur",
        glossLink: "https://en.wikipedia.org/wiki/Centaur",
        symbol: "zodiac-sagittarius",
        date: "Nov 23 - Dec 21",
        element: "Fire",
        planet: "Jupiter"
    },
    "Capricon": {
        name: "Capricon",
        gloss: "The Goat",
        glossLink: "https://en.wikipedia.org/wiki/Goat",
        symbol: "zodiac-capricorn",
        date: "Dec 22 - Jan 19",
        element: "Earth",
        planet: "Saturn"
    },
    "Aquarius": {
        name: "Aquarius",
        gloss: "The Water-bearer",
        glossLink: "https://en.wikipedia.org/wiki/Water_carrier",
        symbol: "zodiac-aquarius",
        date: "Jan 20 - Feb 18",
        element: "Air",
        planet: "Uranus/Saturn"
    },
    "Pisces": {
        name: "Pisces",
        gloss: "The Fish",
        glossLink: "https://en.wikipedia.org/wiki/Fish",
        symbol: "zodiac-pisces",
        date: "Feb 19 - Mar 20",
        element: "Water",
        planet: "Neptune/Jupiter"
    },
}

export const ChineseZodiac = {
    "Rat": {
        name: "Rat",
        nameLink: "https://en.wikipedia.org/wiki/Rat_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/rat.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yang",
        element: "Water",
    },
    "Ox": {
        name: "Ox",
        nameLink: "https://en.wikipedia.org/wiki/Ox_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/ox.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yin",
        element: "Earth",
    },
    "Tiger": {
        name: "Tiger",
        nameLink: "https://en.wikipedia.org/wiki/Tiger_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/tiger.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yang",
        element: "Wood",
    },
    "Rabbit": {
        name: "Rabbit",
        nameLink: "https://en.wikipedia.org/wiki/Rabbit_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/rabbit.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yin",
        element: "Wood",
    },
    "Dragon": {
        name: "Dragon",
        nameLink: "https://en.wikipedia.org/wiki/Dragon_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/dragon.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yang",
        element: "Earth",
    },
    "Snake": {
        name: "Snake",
        nameLink: "https://en.wikipedia.org/wiki/Snake_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/snake.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yin",
        element: "Fire",
    },
    "Horse": {
        name: "Horse",
        nameLink: "https://en.wikipedia.org/wiki/Horse_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/horse.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yang",
        element: "Fire",
    },
    "Goat": {
        name: "Goat",
        nameLink: "https://en.wikipedia.org/wiki/Goat_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/goat.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yin",
        element: "Earth",
    },
    "Monkey": {
        name: "Monkey",
        nameLink: "https://en.wikipedia.org/wiki/Monkey_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/monkey.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yang",
        element: "Metal",
    },
    "Rooster": {
        name: "Rooster",
        nameLink: "https://en.wikipedia.org/wiki/Rooster_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/rooster.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yin",
        element: "Metal",
    },
    "Dog": {
        name: "Dog",
        nameLink: "https://en.wikipedia.org/wiki/Dog_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/dog.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yang",
        element: "Earth",
    },
    "Pig": {
        name: "Pig",
        nameLink: "https://en.wikipedia.org/wiki/Pig_(zodiac)",
        symbol: <Image source={require('../molecules/icons/zodiacIcons/pig.png')} style={{width: 20, height: 20 }}/>,
        sign: "Yin",
        element: "Water",
    },

}
