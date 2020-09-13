import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBKVm5M5Nglym3JTY40XGRYfRPTIqbcTnw",
    authDomain: "crwn-db-2f578.firebaseapp.com",
    databaseURL: "https://crwn-db-2f578.firebaseio.com",
    projectId: "crwn-db-2f578",
    storageBucket: "crwn-db-2f578.appspot.com",
    messagingSenderId: "207210216355",
    appId: "1:207210216355:web:6af6dddae8323085893816",
    measurementId: "G-WYP4B5NLDX"
  }

  firebase.initializeApp(config) 

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase