import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase-storage';
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBmxNKITurwBWij4LjTuuYRPBovQR1T3kU",
    authDomain: "olx-clone-27ebf.firebaseapp.com",
    projectId: "olx-clone-27ebf",
    storageBucket: "olx-clone-27ebf.appspot.com",
    messagingSenderId: "267106888179",
    appId: "1:267106888179:web:6cce46a1d5cf8d6d3bca86",
    measurementId: "G-S2NCFD5FTJ"
  };

  export default firebase.initializeApp(firebaseConfig)