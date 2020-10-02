import React, { useContext } from "react"
import { UserContext } from "./layout"
import SignInButton from "./signIn"
import SignOutButton from "./signOut"

const Header = () => {
  const user = useContext(UserContext)

  return (
    <header
      style={{
        margin: "0 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Simple Notes App</h1>
      {user === null ? (
        <SignInButton />
      ) : !user ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
            alt={user.displayName}
            src={user.photoURL}
          />
          <h2 style={{ margin: "0 1rem" }}>{user.displayName}</h2>
          <SignOutButton />
        </div>
      )}
    </header>
  )
}

export default Header
