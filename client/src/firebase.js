// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bb250.firebaseapp.com",
  projectId: "mern-blog-bb250",
  storageBucket: "mern-blog-bb250.firebasestorage.app",
  messagingSenderId: "1086665511414",
  appId: "1:1086665511414:web:373be40e952dd4d16df7d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
