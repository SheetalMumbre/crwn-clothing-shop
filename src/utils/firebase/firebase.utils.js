// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,
createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

import{ getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnmVKx3oRsHy3x4s0q1yFwjLahcOb1mKU",
  authDomain: "crwn-clothing-db-e4641.firebaseapp.com",
  projectId: "crwn-clothing-db-e4641",
  storageBucket: "crwn-clothing-db-e4641.appspot.com",
  messagingSenderId: "365195344303",
  appId: "1:365195344303:web:d597c1e21a40d437ce175a"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
// console.log('auth - ' + auth)
// debugger;
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) =>{
    if(!userAuth) return;   // if dont't receive auth then dont run function and return
    const userDocRef = doc(db,'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        }
        catch(error){
            console.log('error creating the user', error.message)
        }
    }

    return  userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return; // if not receive email or password then dont run function and return

    return await createUserWithEmailAndPassword (auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return; // if not receive email or password then dont run function and return

    return await signInWithEmailAndPassword (auth, email, password);
}