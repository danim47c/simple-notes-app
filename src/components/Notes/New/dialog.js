import { db, dbTypes } from "client"
import { UserContext } from "components/Layout"
import React, { useContext, useState } from "react"

const initialNewNote = { name: "", content: "" }

const NewNoteDialog = ({ onClose }) => {
  const user = useContext(UserContext)
  const [newNote, setNewNote] = useState(initialNewNote)

  const checkIsValid = () => newNote.name && newNote.content

  const addNote = () => {
    db.collection("notes").add({
      ...newNote,
      uid: user.uid,
      createdAt: dbTypes.FieldValue.serverTimestamp(),
      updatedAt: dbTypes.FieldValue.serverTimestamp()
    })

    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!checkIsValid()) return

    addNote()
  }

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80%",
          maxWidth: "600px",
          padding: "1rem",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>New Note</h2>

        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <input
            style={{
              fontSize: "1.17em",
              fontWeight: "bold",
              width: "60%",
            }}
            placeholder="Name"
            value={newNote.name}
            onChange={({ target: { value: name } }) =>
              setNewNote((newNote) => ({ ...newNote, name }))
            }
          />
          <textarea
            style={{ margin: "0.5rem 0", width: "60%" }}
            placeholder="Content"
            value={newNote.content}
            onChange={({ target: { value: content } }) =>
              setNewNote((newNote) => ({ ...newNote, content }))
            }
          />
          <div style={{ display: "flex", width: "40%", justifyContent: "space-around" }}>
            <button onClick={onClose}>Cancel</button>
            <button type="submit" disabled={!checkIsValid()} >Add</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default NewNoteDialog
