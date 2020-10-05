import firebase from "firebase/app"
import { useEffect } from "react"

const firebaseConfig = {
  apiKey: "AIzaSyD7nmO9gbvi1sJRuV6stjisS4jXse5_D9Y",
  authDomain: "notesapp-5af87.firebaseapp.com",
  databaseURL: "https://notesapp-5af87.firebaseio.com",
  projectId: "notesapp-5af87",
  storageBucket: "notesapp-5af87.appspot.com",
  messagingSenderId: "960203447935",
  appId: "1:960203447935:web:b70cee00d44434c6baa94a",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const useAuth = () => {
  const [user, setUser] = useState()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(setUser)
  }, [])
  return user
}
