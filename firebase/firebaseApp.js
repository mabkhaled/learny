import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyAriAhMDtS8XT4WyyIVl-e9SLm5aWhSV-0",
  authDomain: "learnify-467a6.firebaseapp.com",
  databaseURL: "https://learnify-467a6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnify-467a6",
  storageBucket: "learnify-467a6.appspot.com",
  messagingSenderId: "982954456076",
  appId: "1:982954456076:web:cdcefd654b65eeee7c2a29",
  measurementId: "G-1CV0W09VWK"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
//   firebase.analytics();

  
export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const googleSignIn = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
    'display': 'popup'
  });
export const facebookSignIn = () => auth.signInWithPopup(facebookProvider);

export default firebase;