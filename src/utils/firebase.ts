// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQhvfsUskHlvrwzIvLRcncnqDgiVfxdjI",
  authDomain: "foo-rum.firebaseapp.com",
  projectId: "foo-rum",
  storageBucket: "foo-rum.firebasestorage.app",
  messagingSenderId: "541440317331",
  appId: "1:541440317331:web:988e57141fa62efe013a66",
  measurementId: "G-FLVNSZP12X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);