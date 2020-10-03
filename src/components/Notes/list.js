import { db } from "client"
import React, { useContext, useEffect, useState } from "react"

import { UserContext } from "components/Layout"
import Loading from "components/loading"
import NewNote from "./New"

const NotesList = () => {
  const user = useContext(UserContext)
  const [notes, setNotes] = useState(undefined)

  useEffect(() => {
    db.collection("notes")
      .where("uid", "==", user.uid)
      .get()
      .then(({ docs }) =>
        setNotes(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex" }}>
        <h2 style={{ marginRight: "1rem" }}>Notes List</h2>
        <NewNote />
      </div>

      <div
        style={{
          margin: "1rem 2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {!notes ? (
          <Loading />
        ) : !notes.length ? (
          <p> You haven't created any note yet</p>
        ) : (
          notes.map((note) => <div>{JSON.stringify(note)}</div>)
        )}
      </div>
    </div>
  )
}

export default NotesList
