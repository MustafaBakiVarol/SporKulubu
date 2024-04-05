// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDai-5BBixG_WQVptTyvPjArBrQWA3LhaQ",
    authDomain: "mobil-e689c.firebaseapp.com",
    projectId: "mobil-e689c",
    storageBucket: "mobil-e689c.appspot.com",
    messagingSenderId: "940292767356",
    appId: "1:940292767356:web:9b42797b20afd487c113f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);

export default app;