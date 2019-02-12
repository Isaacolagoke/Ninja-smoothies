import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCHb4rd-zIum13Cc4KnUX5QXo9UuuFyHYQ",
    authDomain: "ninja-smoothies-ece87.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-ece87.firebaseio.com",
    projectId: "ninja-smoothies-ece87",
    storageBucket: "ninja-smoothies-ece87.appspot.com",
    messagingSenderId: "324808521736"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore database
export default firebaseApp.firestore()