// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAqhXlNx-CEgexZ-n1Yswze1yo5WKvviA",
  authDomain: "todo-analytics-7a9f0.firebaseapp.com",
  projectId: "todo-analytics-7a9f0",
  storageBucket: "todo-analytics-7a9f0.appspot.com",
  messagingSenderId: "734953403447",
  appId: "1:734953403447:web:ad1ac3c87e57069366fbb2",
  measurementId: "G-6TC7CY1N5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);