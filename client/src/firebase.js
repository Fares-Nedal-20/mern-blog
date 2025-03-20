// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-873d6.firebaseapp.com",
  projectId: "mern-blog-873d6",
  storageBucket: "mern-blog-873d6.firebasestorage.app",
  messagingSenderId: "260275132471",
  appId: "1:260275132471:web:5756f9d8566eaddcd587b2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);