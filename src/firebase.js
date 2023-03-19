import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import {  getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCttlgQM7aXEmxaSUSUhD-QX0NM_Gc1hns",
  authDomain: "chat-7caec.firebaseapp.com",
  projectId: "chat-7caec",
  storageBucket: "chat-7caec.appspot.com",
  messagingSenderId: "835672590709",
  appId: "1:835672590709:web:c1fbc96c27a45e65bceb3c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()  
export const storage = getStorage();
export const db = getFirestore();