// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "noel-blog-mern.firebaseapp.com",
  projectId: "noel-blog-mern",
  storageBucket: "noel-blog-mern.firebasestorage.app",
  messagingSenderId: "681776693387",
  appId: "1:681776693387:web:93b2346b2829b896c0548e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
