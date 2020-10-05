import React, { createContext } from "react"
import firebase from "firebase/app"
import "firebase/auth"
import Header from "./header"
import { useAuth } from "../firebase"

export const UserContext = createContext()

const Layout = ({ children }) => {
  // argumento children (hijos)
  const [user, loading] = useAuth()

  return (
    <UserContext.Provider value={user}>
      <Header />
      <div>{loading ? <div>Loading...</div> : user && children}</div>
    </UserContext.Provider>
  )
}

export default Layout
