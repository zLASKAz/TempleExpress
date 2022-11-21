// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvmMQu39cwXcb_MxTPzYqEjAG2ns1QO6w",
    authDomain: "temple-express-app.firebaseapp.com",
    projectId: "temple-express-app",
    storageBucket: "temple-express-app.appspot.com",
    messagingSenderId: "148469365565",
    appId: "1:148469365565:web:807e7c2026b4314b39e354",
    measurementId: "G-CQRT1EMBNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);