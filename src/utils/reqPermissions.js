import { PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export async function requestLocationPermission() 
{
  try {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
  } catch (err) {
    console.warn(err)
  }
}

export function getLocation() {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 })
  })
}
