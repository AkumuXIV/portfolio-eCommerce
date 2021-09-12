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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if not null.  actually signed in.
  if (!userAuth) {
    return;
  }

  //reference to user
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //get the snapshot
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //if the given user doesn't exist, create it.
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(element => {
      const newDocRef = collectionRef.doc(); //get doc at empty string.  give new doc ref.
      batch.set(newDocRef, element);
  });

  console.log('about to commit.');

  await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection;
    return accum;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;