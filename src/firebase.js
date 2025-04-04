// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT0r3j_OYvIkZkvQ3qVsggh-Txpkupgw4",
  authDomain: "clothes-shop-e6557.firebaseapp.com",
  projectId: "clothes-shop-e6557",
  storageBucket: "clothes-shop-e6557.firebasestorage.app",
  messagingSenderId: "233063427035",
  appId: "1:233063427035:web:5a8577abab934cd3d855fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
