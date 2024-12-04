// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp6q1wiNZTgsVJnuAr0pAwMLFrNOA0l5Y",
  authDomain: "athletic-arsenal.firebaseapp.com",
  projectId: "athletic-arsenal",
  storageBucket: "athletic-arsenal.firebasestorage.app",
  messagingSenderId: "440187901522",
  appId: "1:440187901522:web:69b12f87df608563fdf18b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
