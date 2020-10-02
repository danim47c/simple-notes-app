import React, { useContext, useState } from "react"

import firebase from "firebase/app"
import "firebase/firestore"

import { UserContext } from "./layout"

const initialNote = { name: "", content: "" }

const NewNote = () => {
  const user = useContext(UserContext)

  const [opened, setOpened] = useState(false)
  const [note, setNote] = useState(initialNote)

  const handleOpen = () => setOpened(true)

  const handleSave = async () => {
    await firebase
      .firestore()
      .collection("notes")
      .add({ ...note, uid: user.uid })
    setOpened(false)
    setNote(initialNote)
  }

  const handleCancel = () => {
    setOpened(false)
    setNote(initialNote)
  }

  return (
    <div
      style={{
        marginLeft: "4rem",
      }}
    >
      {!opened ? (
        <button
          onClick={handleOpen}
          style={{ fontSize: "1em", padding: "0.4rem" }}
        >
          New Note
        </button>
      ) : (
        <div style={{ margin: "1rem 0", display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              style={{
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
              placeholder="Name"
              value={note.name}
              onChange={({ target: { value: name } }) =>
                setNote({ ...note, name })
              }
            />
            <textarea
              style={{
                marginTop: "0.2rem",
                fontSize: "0.75em",
              }}
              placeholder="Content"
              value={note.content}
              onChange={({ target: { value: content } }) =>
                setNote({ ...note, content })
              }
            />
          </div>
          <div
            style={{
              marginLeft: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button onClick={handleSave}>Save</button>
            <button style={{ marginTop: "0.2rem" }} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewNote
