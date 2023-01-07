import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCULHWWO8U1AufPesWogIX4KE-sRGT_WxM",
  authDomain: "twitter-clone-108cb.firebaseapp.com",
  projectId: "twitter-clone-108cb",
  storageBucket: "twitter-clone-108cb.appspot.com",
  messagingSenderId: "373225097903",
  appId: "1:373225097903:web:e7695af7d3f66313a1a25a",
  measurementId: "G-R4834P1FTT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;