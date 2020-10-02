import firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBj5dqDLTKMKSyaiF-tcDNLczkoNRcAE7o",
  authDomain: "simple-n-f486a.firebaseapp.com",
  databaseURL: "https://simple-n-f486a.firebaseio.com",
  projectId: "simple-n-f486a",
  storageBucket: "simple-n-f486a.appspot.com",
  messagingSenderId: "66684349481",
  appId: "1:66684349481:web:04840a6d495f1d793f8038",
  measurementId: "G-EDNDLZ8PBH",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
