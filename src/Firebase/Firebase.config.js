// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCVorYMOnMoBFgJSTNPa6y2bA29vDkzNKY",
  authDomain: "srsgs-ae1de.firebaseapp.com",
  projectId: "srsgs-ae1de",
  storageBucket: "srsgs-ae1de.firebasestorage.app",
  messagingSenderId: "92793113523",
  appId: "1:92793113523:web:328b8d8b888d2cb0e9d9c6",
  measurementId: "G-NX120SCTXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;