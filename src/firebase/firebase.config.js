// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORGAEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyATbGsBU930jHF96E-1q8yHeqZ2euBTaBE",
  authDomain: "bookstore-mern-app-31d2c.firebaseapp.com",
  projectId: "bookstore-mern-app-31d2c",
  storageBucket: "bookstore-mern-app-31d2c.firebasestorage.app",
  messagingSenderId: "942743173411",
  appId: "1:942743173411:web:52e950b13e707d25883496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);