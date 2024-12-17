// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKS4n8UNYtpRm2cfj7Fxjt6CTk455dzQo",
  authDomain: "timer-c5c18.firebaseapp.com",
  projectId: "timer-c5c18",
  storageBucket: "timer-c5c18.appspot.com",
  messagingSenderId: "480459184967",
  appId: "1:480459184967:web:118a581aa38c6cac5f4a62",
  measurementId: "G-RR27YV4K06",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
