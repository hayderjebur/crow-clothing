import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnBgLd4y2Te4Ty9jPeBR-YC_T8-1WXgQk",
  authDomain: "crwn-db-5a16d.firebaseapp.com",
  databaseURL: "https://crwn-db-5a16d.firebaseio.com",
  projectId: "crwn-db-5a16d",
  storageBucket: "",
  messagingSenderId: "814175781592",
  appId: "1:814175781592:web:a6b393fa00591edae40dad"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
