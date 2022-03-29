import {ToastAndroid} from "react-native";

export const showToastShort = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  export function showToastLong(msg) {
    ToastAndroid.show(msg, ToastAndroid.LONG);
  };