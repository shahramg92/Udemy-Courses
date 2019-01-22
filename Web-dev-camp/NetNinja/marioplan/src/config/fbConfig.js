import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAh5R6GHCvJQABmU5xeL5jd3JnyIw2PUZQ",
    authDomain: "shahram-mario-plan.firebaseapp.com",
    databaseURL: "https://shahram-mario-plan.firebaseio.com",
    projectId: "shahram-mario-plan",
    storageBucket: "shahram-mario-plan.appspot.com",
    messagingSenderId: "489158802366"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;