import firebase from "firebase/app";
import "firebase/firestore"; 
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAVnWpxrj-5dmG-SGo3J9VgVXiQM2dEJiE",
    authDomain: "crown-03.firebaseapp.com",
    projectId: "crown-03",
    storageBucket: "crown-03.appspot.com",
    messagingSenderId: "924420159350",
    appId: "1:924420159350:web:ae2b0082a75131eb932c57",
    measurementId: "G-WPBCE4L1RJ"
  };

  firebase.initializeApp(config) 
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: "select_account"})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase 