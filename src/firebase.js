import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBftYG-3MB6j8V3pUPm7yKt9o9iEZYuTyM",
    authDomain: "diary-c6712.firebaseapp.com",
    databaseURL: "https://diary-c6712.firebaseio.com",
    projectId: "diary-c6712",
    storageBucket: "diary-c6712.appspot.com",
    messagingSenderId: "743719603410"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const SignUpEmailPassword = new firebase.auth.TwitterAuthProvider();



