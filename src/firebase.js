
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBVDV7bfcwSR8ZtCHgsy6N8j3wxtqHBzA0",
    authDomain: "cart-6c44b.firebaseapp.com",
    projectId: "cart-6c44b",
    storageBucket: "cart-6c44b.appspot.com",
    messagingSenderId: "150541155374",
    appId: "1:150541155374:web:2bcc900b74af0d972233bf"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;




