// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcFPqFVQv6ovbis6N8tD2DMzxb8KEiQWw",
  authDomain: "user-email-pass-auth-cdd46.firebaseapp.com",
  projectId: "user-email-pass-auth-cdd46",
  storageBucket: "user-email-pass-auth-cdd46.appspot.com",
  messagingSenderId: "315488512280",
  appId: "1:315488512280:web:93165a50e8659b63bfd66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;