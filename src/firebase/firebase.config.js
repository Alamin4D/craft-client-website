// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqPacW0Bycf_Bz7W18U0ub6k0KLoQL7b0",
  authDomain: "craft-store-9bef9.firebaseapp.com",
  projectId: "craft-store-9bef9",
  storageBucket: "craft-store-9bef9.appspot.com",
  messagingSenderId: "626136339390",
  appId: "1:626136339390:web:103e793c3feb1c052b1fef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;