import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAXs6q0YsaiiNA54Edg1-j3Z6-_vx1pq60",
    authDomain: "react-contact-8af71.firebaseapp.com",
    projectId: "react-contact-8af71",
    storageBucket: "react-contact-8af71.appspot.com",
    messagingSenderId: "326457771424",
    appId: "1:326457771424:web:9e8fbeb9e8e981ee5810c5"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();