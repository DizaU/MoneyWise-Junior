// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4iRahbAnZ1bsO2xhpS2mE0UFq4qBZoU8",
  authDomain: "moneywise-junior.firebaseapp.com",
  projectId: "moneywise-junior",
  storageBucket: "moneywise-junior.firebasestorage.app",
  messagingSenderId: "598376152355",
  appId: "1:598376152355:web:f2d787026270e3d34b6096",
  measurementId: "G-W4Z96ZNNGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
export default app;
