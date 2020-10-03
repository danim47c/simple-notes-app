import { useAuth } from "../../client"
import React, { createContext } from "react"
import Header from "./header"

export const UserContext = createContext()

const Layout = ({ children }) => {
  const user = useAuth()

  return (
    <UserContext.Provider value={user}>
      <Header user={user} />

      <main style={{ margin: "2rem 4rem 0" }}>{user && children}</main>
    </UserContext.Provider>
  )
}

export default Layout
