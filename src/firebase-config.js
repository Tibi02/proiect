// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKtgQbQwDe29tWxXwWRpDRA5HNx5bA1fk",
  authDomain: "realtime-chat-c0e0b.firebaseapp.com",
  projectId: "realtime-chat-c0e0b",
  storageBucket: "realtime-chat-c0e0b.appspot.com",
  messagingSenderId: "719466372390",
  appId: "1:719466372390:web:9fa2743fba078ac5d2b5e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);