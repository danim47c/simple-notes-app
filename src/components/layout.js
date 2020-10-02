import React, { createContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import firebase from "firebase/app"
import "firebase/auth"
import Header from "./header"

export const UserContext = createContext()

const Layout = ({ children }) => {
  // argumento children (hijos)
  const [user, loading] = useAuthState(firebase.auth())

  return (
    <UserContext.Provider value={user}>
      <Header />
      <div>{loading ? <div>Loading...</div> : user && children}</div>
    </UserContext.Provider>
  )
}

export default Layout
