// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEkm6F3lxk7w9JjKgSTUMoCwJqASK8shQ",
    authDomain: "memlane-bfb05.firebaseapp.com",
    projectId: "memlane-bfb05",
    storageBucket: "memlane-bfb05.appspot.com",
    messagingSenderId: "107023846667",
    appId: "1:107023846667:web:1aa5178e342f91320ba60e",
    measurementId: "G-NJ6YXPFH5H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;