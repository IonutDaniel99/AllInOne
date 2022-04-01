import { Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles'

export default function LoadingComponent({ height }) {
    return (
        <View
            style={{
                minHeight: height,
                maxHeight: height,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Text style={{color: "#fff", fontSize: globalStyles.fontLarge}}>Loading...</Text>
        </View>
    )
}

