import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// initialize firebase
var config = {
    apiKey: "AIzaSyBlU0sr40caKN5h5ZJhIeloSKEEQruyQV8",
    authDomain: "react-mario-da89a.firebaseapp.com",
    databaseURL: "https://react-mario-da89a.firebaseio.com",
    projectId: "react-mario-da89a",
    storageBucket: "react-mario-da89a.appspot.com",
    messagingSenderId: "947136184906"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;