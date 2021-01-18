import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCK1b8uZHvqdWwMr8dwBq1TVHG_nn5dx9I",
    authDomain: "clone-4e19f.firebaseapp.com",
    databaseURL: "https://clone-4e19f.firebaseio.com",
    projectId: "clone-4e19f",
    storageBucket: "clone-4e19f.appspot.com",
    messagingSenderId: "163867005706",
    appId: "1:163867005706:web:370e0bcbdc70eccdfce0f3",
    measurementId: "G-Z69J3C94GY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebaseApp.auth();

  export { db, auth }; 