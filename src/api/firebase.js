
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAnfDiTlhfPJwZMXL5ZzkfYWc2snugeEDo",
    authDomain: "project-2a9b5.firebaseapp.com",
    projectId: "project-2a9b5",
    storageBucket: "project-2a9b5.appspot.com",
    messagingSenderId: "907288234927",
    appId: "1:907288234927:web:2ec813fc2c0d85fbe8fd5a",
    measurementId: "G-LH7900K2Z6"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app)

