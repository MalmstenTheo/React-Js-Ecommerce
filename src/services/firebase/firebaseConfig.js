
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpjeNhb2a6yp14i91ZwmhsbiuZboDfASw",
    authDomain: "ecommerce-daf5d.firebaseapp.com",
    projectId: "ecommerce-daf5d",
    storageBucket: "ecommerce-daf5d.appspot.com",
    messagingSenderId: "170133369521",
    appId: "1:170133369521:web:40cdfa50070d611dc52890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)