import React from "react"

import { auth, GoogleAuthProvider } from "client"

const SignInButton = () => {
  const handleClick = () => auth.signInWithPopup(GoogleAuthProvider)

  return <button onClick={handleClick}>Sign In</button>
}

export default SignInButton
