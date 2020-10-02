import React from "react"
import firebase from "firebase/app"
import "firebase/auth"

const SignOutButton = () => {
  const handleClick = () => firebase.auth().signOut()

  return <button onClick={handleClick}>Sign Out</button>
}

export default SignOutButton
