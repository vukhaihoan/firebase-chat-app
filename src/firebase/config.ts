import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA8DwGmdkKDz5vWnjadSiDkNI52J3YLA6E",
  authDomain: "chat-app-f2988.firebaseapp.com",
  projectId: "chat-app-f2988",
  storageBucket: "chat-app-f2988.appspot.com",
  messagingSenderId: "160526267752",
  appId: "1:160526267752:web:d8a30f86c93641f09a92dd",
  measurementId: "G-FLH20DCFF0",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
