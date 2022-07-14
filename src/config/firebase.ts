import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_CONFIG } from "../constants.config";

// export const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const {
  apiKey,
  appId,
  projectId,
  storageBucket,
  messagingSenderId,
  measurementId,
  authDomain,
} = FIREBASE_CONFIG;

export const firebaseConfig = {
  apiKey,
  appId,
  projectId,
  storageBucket,
  messagingSenderId,
  measurementId,
  authDomain,
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app);

const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
