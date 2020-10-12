
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyCFMS9jBnqd-mKgpYKfOrrAdVtl1D0-u80",
    authDomain: "aapnidhukaan.firebaseapp.com",
    databaseURL: "https://aapnidhukaan.firebaseio.com",
    projectId: "aapnidhukaan",
    storageBucket: "aapnidhukaan.appspot.com",
    messagingSenderId: "774752807853",
    appId: "1:774752807853:web:54a925c4b88adf8fae4f24",
    measurementId: "G-32ETRDJ61C"
    
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{db,auth,storage} ;