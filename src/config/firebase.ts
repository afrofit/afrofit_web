import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_CONFIG } from "../constants.config";

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
