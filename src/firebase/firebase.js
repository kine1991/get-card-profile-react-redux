import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { firebaseConfig } from './config'

// export const getCurrentUser = () => {
//     return new Promise((resolve, reject) => {
//       const unsubscribe = auth.onAuthStateChanged(userAuth => {
//         unsubscribe();
//         resolve(userAuth);
//       }, reject);
//     });
// };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


export default firebase;