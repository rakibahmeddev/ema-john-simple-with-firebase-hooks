// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHckb2qOFPYpraZRvX1tMVJQkTImA28S8",
  authDomain: "ema-john-simple-86dab.firebaseapp.com",
  projectId: "ema-john-simple-86dab",
  storageBucket: "ema-john-simple-86dab.appspot.com",
  messagingSenderId: "444642897071",
  appId: "1:444642897071:web:3c78d70c6e246dbc4a385a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
