import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bikeshoptoch.firebaseapp.com",
  projectId: "bikeshoptoch",
  storageBucket: "bikeshoptoch.appspot.com",
  messagingSenderId: "997142207838",
  appId: "1:997142207838:web:75b8d32fd45068a25e43cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
