// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase-admin/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWnpqWmDdmIc5Et7Mfa4-uz9RdVlDlQDw",
  authDomain: "kadaix.firebaseapp.com",
  projectId: "kadaix",
  storageBucket: "kadaix.appspot.com",
  messagingSenderId: "150478434855",
  appId: "1:150478434855:web:815bf0a58cbd8095a39402",
  measurementId: "G-S9P2CQ4FPK",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
