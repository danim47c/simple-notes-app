import { useAuthState } from "react-firebase-hooks/auth"
import React, { createContext } from "react"

import firebase from "firebase/app"
import "firebase/auth"

export const UserContext = createContext(undefined)

const Layout = ({ children }) => {
  const [user, loading] = useAuthState(firebase.auth())

  return (
    <UserContext.Provider value={user}>
      <header
        style={{
          margin: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "stretch",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <h1>Simple Notes App</h1>
        {loading ? (
          <h4>Loading...</h4>
        ) : !user ? (
          <button
            onClick={() =>
              firebase
                .auth()
                .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            }
          >
            Login
          </button>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={user.photoURL}
                alt={user.displayName}
                style={{
                  width: "60px",

                  height: "60px",
                  marginRight: "15px",
                  borderRadius: "50%",
                }}
              />
              <h2>{user.displayName}</h2>
              <button
                style={{ padding: "5px", marginLeft: "20px" }}
                onClick={() => firebase.auth().signOut()}
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </header>

      <main>{user && children}</main>
    </UserContext.Provider>
  )
}

export default Layout
