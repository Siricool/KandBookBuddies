//import * as firebase from 'firebase';
import firebase from 'firebase/app'
import '@firebase/auth';
import '@firebase/firestore';

//import firebase from "firebase"



//DETTA ÄR FRÅN BOOKBUDDIES-database
const firebaseConfig = {
  apiKey: "AIzaSyCYQJxigBe3LF3dmZQNRZSHU6hdFsccxhw",
  authDomain: "bookbuddies-database.firebaseapp.com",
  databaseURL: "https://bookbuddies-database.firebaseio.com",
  projectId: "bookbuddies-database",
  storageBucket: "bookbuddies-database.appspot.com",
  messagingSenderId: "477890257148",
  appId: "1:477890257148:web:6923bdbd3e18aa7a26b779",
  measurementId: "G-NJ6CL5MCKJ"
};
/*const firebaseConfig = {
  apiKey: 'YOUR_KEY_HERE_AIzaSyAOWH',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'your-project-id-1234',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};*/

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
