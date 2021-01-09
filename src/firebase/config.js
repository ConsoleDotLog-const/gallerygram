import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC9ZfF7o2gPoPxyJvivuIWcuhi9J13dGeo",
    authDomain: "gallerygram-194f0.firebaseapp.com",
    projectId: "gallerygram-194f0",
    storageBucket: "gallerygram-194f0.appspot.com",
    messagingSenderId: "308985248643",
    appId: "1:308985248643:web:484a24c45d905b5b5994b6",
    measurementId: "G-XLD4GQ8001"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage(),
  const projectFirestore = firebase.firestore()

  export { projectStorage, projectFirestore}