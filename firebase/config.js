// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey : EXPO_PUBLIC_APIKEY,
  authDomain : EXPO_PUBLIC_AUTHDOMAIN,
  projectId : EXPO_PUBLIC_PROJECTID,
  storageBucket : EXPO_PUBLIC_STORAGEBUCKET,
  messagingSenderId : EXPO_PUBLIC_MESSAGINGSENDERID,
  appId : EXPO_PUBLIC_APPID,
  measurementId : EXPO_PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});