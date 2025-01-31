// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC6UkHgYje4gxMMVThsPxzR7ZfCjEEIrc4",
//   authDomain: "photogram-ee866.firebaseapp.com",
//   projectId: "photogram-ee866",
//   storageBucket: "photogram-ee866.firebasestorage.app",
//   messagingSenderId: "888639279678",
//   appId: "1:888639279678:web:d1680d916539f86e57776f"
// };



const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket:import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId:import.meta.env.VITE_MESSAGESENDERVITE_MESSAGESENDER,
    appId: import.meta.env.VITE_APPIDVITE_APPID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


export default app;
