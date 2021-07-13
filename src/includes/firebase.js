import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAbe3zmXu0ipsGazHRh_CmC8da0zvUpwhU',
  authDomain: 'music-ffa92.firebaseapp.com',
  projectId: 'music-ffa92',
  storageBucket: 'music-ffa92.appspot.com',
  // messagingSenderId: '816074784330',
  appId: '1:816074784330:web:d20bda642fa5eefb8070b3',
  measurementId: 'G-3J3EYVNKY1',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth();

const db = firebase.firestore();

const usersCollection = db.collection('users');

export { auth, db, usersCollection };
