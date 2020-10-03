import Loading from "components/loading"
import React from "react"
import SignInButton from "./signIn"
import SignOutButton from "./signOut"

const Header = ({ user }) => (
  <header
    style={{
      margin: "1rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <h1>Simple Notes App</h1>

    {user === null ? (
      <SignInButton />
    ) : !user ? (
      <Loading />
    ) : (
      <>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            alt={user.displayName}
            src={user.photoURL}
          />
          <h3 style={{ marginLeft: "1rem" }}>{user.displayName}</h3>
        </div>
        <SignOutButton />
      </>
    )}
  </header>
)

export default Header
