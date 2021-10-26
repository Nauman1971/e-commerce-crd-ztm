import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBS15oGzaJfZtrZ79RKH7z8rOknzq2ogqI",
    authDomain: "crown-clothing-ecom-db.firebaseapp.com",
    projectId: "crown-clothing-ecom-db",
    storageBucket: "crown-clothing-ecom-db.appspot.com",
    messagingSenderId: "396161247849",
    appId: "1:396161247849:web:bd63c1d4c7c2ecd6a690f8"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;