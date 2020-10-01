import React, { createContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from "firebase/app"
import "firebase/auth"
import SignInButton from "./signIn"

export const UserChildren = createContext()

const Layout = ({ children }) => {
  // argumento children (hijos)
  const [user, loading] = useAuthState(firebase.auth())

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : user === null ? (
        <SignInButton />
      ) : (
        children
      )}
    </div>
  )
}

export default Layout
