import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, View} from 'react-native';
import MainScreen from './src/MainScreen';
import { requestLocationPermission } from './src/utils/reqPermissions';

export default function App() {
  requestLocationPermission()
  return (
      <View style={styles.container}>
        <StatusBar />
        <MainScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c2f33',
    width: '100%',
    height: '100%',
  },
});
