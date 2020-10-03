import React from "react"

import { auth } from "client"

const SignOutButton = () => {
  const handleClick = () => auth.signOut()

  return <button onClick={handleClick}>Sign Out</button>
}

export default SignOutButton
