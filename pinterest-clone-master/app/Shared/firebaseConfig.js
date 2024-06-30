// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-120409.firebaseapp.com",
  databaseURL: "https://blog-120409-default-rtdb.firebaseio.com",
  projectId: "blog-120409",
  storageBucket: "blog-120409.appspot.com",
  messagingSenderId: "211255177012",
  appId: "1:211255177012:web:451ed30c6be0b40ef13f61",
  measurementId: "G-JNY6KR58TT"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;