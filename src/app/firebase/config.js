import firebase from 'firebase/app'
import  'firebase/firestore'
import  'firebase/auth'


var config = {
    apiKey: "AIzaSyDWUiivPFcQ63OXdl1Ys0K48dhBy3BGyQY",
    authDomain: "quetzalcoatl-4d987.firebaseapp.com",
    databaseURL: "https://quetzalcoatl-4d987.firebaseio.com",
    projectId: "quetzalcoatl-4d987",
    storageBucket: "quetzalcoatl-4d987.appspot.com",
    messagingSenderId: "355660869880"
  };
  firebase.initializeApp(config);

  export const db = firebase.firestore()
  const settings = { timestampsInSnapshots: true};
  db.settings(settings);

  export const auth  = firebase.auth();

