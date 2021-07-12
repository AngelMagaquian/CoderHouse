//import * as firebase from 'firebase/app'; //liena del error
import firebase from 'firebase/app';
import '@firebase/firestore'
//import 'firebase/firestore'; //supongo que esta tambien va a tener error 

var app = firebase.initializeApp({
  apiKey: "AIzaSyCFwGNSAp3CSFLE0SPWuEex4Zj3pNSSaiU",
    authDomain: "ecommers-am.firebaseapp.com",
    projectId: "ecommers-am",
    storageBucket: "ecommers-am.appspot.com",
    messagingSenderId: "588354980364",
    appId: "1:588354980364:web:ed7b52c1a4705ada1fbc29",
    measurementId: "G-44C39VVBE9"
});

export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
