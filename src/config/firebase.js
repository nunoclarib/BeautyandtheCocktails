import firebase from 'firebase/app'
import "firebase/auth"

const firebase_app = firebase.initializeApp({
    apiKey: "AIzaSyATiO9Qop5l_67C1awYMOYkZ-Pl6n1DrzE",
    authDomain: "beauty-and-the-cocktails-bdd18.firebaseapp.com",
    databaseURL: "https://beauty-and-the-cocktails-bdd18-default-rtdb.firebaseio.com",
    projectId: "beauty-and-the-cocktails-bdd18",
    storageBucket: "beauty-and-the-cocktails-bdd18.appspot.com",
    messagingSenderId: "888453356469",
    appId: "1:888453356469:web:ea407329160a4b1e9217fc",
    measurementId: "G-Y7Y6CBS69H"
})

export default firebase_app