import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtkrgySVp0mgLllnDnSMmczPDDRiI2E9I",
  authDomain: "todo-cd568.firebaseapp.com",
  projectId: "todo-cd568",
  storageBucket: "todo-cd568.appspot.com",
  messagingSenderId: "853201938966",
  appId: "1:853201938966:web:4ffc308fffdfe005cee337",
  measurementId: "G-WQBG34GC2Y",
});

const db = firebaseApp.firestore();

export default db;
