
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB6zw4gHGLFec8l888zhMljERo7SH4DUaI",
  authDomain: "imperioyugioh-c1ba9.firebaseapp.com",
  projectId: "imperioyugioh-c1ba9",
  storageBucket: "imperioyugioh-c1ba9.appspot.com",
  messagingSenderId: "167503662269",
  appId: "1:167503662269:web:2eb32796e6ca7d9744fbd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);