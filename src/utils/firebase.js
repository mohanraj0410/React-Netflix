// Import the functions you need from the SDKs you need 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvvEZ3c-WdZRzgJAdD-SIb1UA48qqAEEc",
  authDomain: "netflix-e1912.firebaseapp.com",
  projectId: "netflix-e1912",
  storageBucket: "netflix-e1912.appspot.com",
  messagingSenderId: "683848600834",
  appId: "1:683848600834:web:cf97b69e0139ddaec5861b",
  measurementId: "G-NG95SPMHHN"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();