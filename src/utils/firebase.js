// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt3yUV1m70rSwKZUI3alwoX5yz3UlrWJ4",
  authDomain: "netflixgpt-edae2.firebaseapp.com",
  projectId: "netflixgpt-edae2",
  storageBucket: "netflixgpt-edae2.appspot.com",
  messagingSenderId: "140867741373",
  appId: "1:140867741373:web:9beaa57b088efbc8ddb9d4",
  measurementId: "G-RJCEB9FH31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
//npm install -g firebase-tools
