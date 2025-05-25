// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8_UXPz5qhF7a6wNypiXEp3kRtLI_4O7E",
  authDomain: "final-a630c.firebaseapp.com",
  projectId: "final-a630c",
  storageBucket: "final-a630c.firebasestorage.app",
  messagingSenderId: "134164904731",
  appId: "1:134164904731:web:acb1d3483b09b33ca371be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//export { db };
