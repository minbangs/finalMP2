import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAm0YF5BzgeskIkd67KyuzAOQ7FUNpZJ-U",
  authDomain: "trends-ph-dcfab.firebaseapp.com",
  projectId: "trends-ph-dcfab",
  storageBucket: "trends-ph-dcfab.appspot.com",
  messagingSenderId: "59444852725",
  appId: "1:59444852725:web:59e4e217d094bd750cd2bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
