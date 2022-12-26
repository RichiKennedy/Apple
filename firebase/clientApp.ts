import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAZ2NnFq8iW14-KCnERR2NRZ5aHn0fYeFc",
  authDomain: "apple-clone-d387a.firebaseapp.com",
  projectId: "apple-clone-d387a",
  storageBucket: "apple-clone-d387a.appspot.com",
  messagingSenderId: "612331316791",
  appId: "1:612331316791:web:ce0857c4fca0e2a3ee01b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
