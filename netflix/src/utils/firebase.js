// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_HGTGJAoCiTSFsfrjccISZrlhS58rCAU",
  authDomain: "netflix-714ef.firebaseapp.com",
  projectId: "netflix-714ef",
  storageBucket: "netflix-714ef.appspot.com",
  messagingSenderId: "24653936729",
  appId: "1:24653936729:web:37d220bf551a6bd1965948",
  measurementId: "G-WRGQK13XNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()