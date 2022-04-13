import { Text, View } from 'react-native'
import React from 'react'

export default function WarningComponent({ height, text, fontSize }) {
    return (
        <View
            style={{
                minHeight: height,
                maxHeight: height,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{color: "#fff", fontSize: fontSize}}>{text}</Text>
        </View>
    )
}

