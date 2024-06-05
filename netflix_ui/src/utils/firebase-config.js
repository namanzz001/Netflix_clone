// Import the functions you need from the SDKs you need
import {  initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsr9nRrWchZarOj0RFl_OJmMTfXEfB_i0",
  authDomain: "netflix-clone-afbde.firebaseapp.com",
  projectId: "netflix-clone-afbde",
  storageBucket: "netflix-clone-afbde.appspot.com",
  messagingSenderId: "188081537656",
  appId: "1:188081537656:web:0443a6698e3390dbc5638d",
  measurementId: "G-45MWH9LBFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebasAuth = getAuth(app);