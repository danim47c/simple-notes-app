import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import { useState } from "react"

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

export const db = firebase.firestore()
export const dbTypes = firebase.firestore

export const auth = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const useAuth = () => {
  const [user, setUser] = useState(undefined)

  auth.onAuthStateChanged(setUser)

  return user
}
