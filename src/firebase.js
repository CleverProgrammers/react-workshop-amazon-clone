import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDrLKxRoYTnUB2cH6x7G-gnkI-h54Rozs8",
    authDomain: "clone-ws-a7183.firebaseapp.com",
    projectId: "clone-ws-a7183",
    storageBucket: "clone-ws-a7183.appspot.com",
    messagingSenderId: "190021235475",
    appId: "1:190021235475:web:4f355cd77d5550330960e6"
});

const db = firebaseApp.firestore()

export { db }