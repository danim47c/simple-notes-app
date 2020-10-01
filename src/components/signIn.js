import React from "react"
import firebase from "firebase/app"
import "firebase/auth"

const SignInButton = () => {
  const handleClick = () =>
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())

  return <button onClick={handleClick}>Sign In</button>
}

export default SignInButton
