import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRYnYyjIVfCBa0MuvLWpAcM5uHYieqJRI",
    authDomain: "portfolio-ecommerce-db-63bf5.firebaseapp.com",
    projectId: "portfolio-ecommerce-db-63bf5",
    storageBucket: "portfolio-ecommerce-db-63bf5.appspot.com",
    messagingSenderId: "287159513047",
    appId: "1:287159513047:web:4069e87cbde513e2f66592",
    measurementId: "G-GCTET2YYRY"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;