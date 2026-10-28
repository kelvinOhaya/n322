// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvYfFcZhdu6a8xF9aEYkZEz1yZoCMwSk0",
  authDomain: "n315-79608.firebaseapp.com",
  projectId: "n315-79608",
  storageBucket: "n315-79608.firebasestorage.app",
  messagingSenderId: "691966975858",
  appId: "1:691966975858:web:854d880fdd4fe8dd2807eb",
  measurementId: "G-L2THC8XLXC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
