// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiNrcILefx0n672gfZN-66o8cxXPhgO4I",
  authDomain: "redux-toolkit-example-b3ebb.firebaseapp.com",
  projectId: "redux-toolkit-example-b3ebb",
  storageBucket: "redux-toolkit-example-b3ebb.appspot.com",
  messagingSenderId: "263421727847",
  appId: "1:263421727847:web:541b2ab30558bd1abe30c2"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )