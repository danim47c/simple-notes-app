import { db } from "client"
import React, { useContext, useEffect, useState } from "react"

import { UserContext } from "components/Layout"
import Loading from "components/loading"
import NewNote from "./New"
import Note from "./item"

const NotesList = () => {
  const user = useContext(UserContext)
  const [notes, setNotes] = useState(undefined)

  useEffect(() => {
    const unsubscribe = db.collection("notes")
    .where("uid", "==", user.uid)
    .orderBy("updatedAt", 'desc')
      .onSnapshot(({ docs }) =>
        setNotes(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      )

    return () => unsubscribe()
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
          width: "100%",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {!notes ? (
          <Loading />
        ) : !notes.length ? (
          <p> You haven't created any note yet</p>
        ) : (
          notes.map((note, i) => <React.Fragment key={note.id}>
            {!!i && <hr style={{width: "30%", margin: "0.6rem 0"}} />}
            <Note note={note}/>
          </React.Fragment>)
        )}
      </div>
    </div>
  )
}

export default NotesList
