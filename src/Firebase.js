// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth , createUserWithEmailAndPassword,onAuthStateChanged, signOut} from 'firebase/auth'
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPZJ5tZr1SPN6HxV6zGga4J041yOnxiRc",
  authDomain: "alumni-student-interaction.firebaseapp.com",
  projectId: "alumni-student-interaction",
  storageBucket: "alumni-student-interaction.appspot.com",
  messagingSenderId: "2952517935",
  appId: "1:2952517935:web:422847484ec329b544e9da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app);


export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password)
}

export function useAuth() {
   const [currentUser, setcurrentUser] = useState();

   useEffect(() => {
     const unsub = onAuthStateChanged(auth , user => setcurrentUser(user) );
     return unsub;
   })

   return currentUser ;
}

export function logOut() {
  return signOut(auth);
}
