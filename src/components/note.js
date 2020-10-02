import React, { useState } from "react"

import firebase from "firebase/app"
import "firebase/firestore"

const Note = ({ note }) => {
  const [editing, setEditing] = useState(false)
  const [updatedNote, setUpdatedNote] = useState(note)

  const deleteNote = () =>
    firebase.firestore().collection("notes").doc(note.id).delete()

  const sameNote = () => Object.values(note) === Object.values(updatedNote)

  const editNote = () => {
    if (!sameNote) return

    delete updatedNote.id

    return firebase
      .firestore()
      .collection("notes")
      .doc(note.id)
      .update(updatedNote)
  }

  const handleEdit = () => setEditing(true)

  const handleDelete = () => deleteNote()

  const handleEditSave = async () => {
    setEditing(false)
    await editNote()
  }

  const handleEditCancel = () => {
    setEditing(false)
    setUpdatedNote(note)
  }

  return (
    <div style={{ margin: "1rem 0", display: "flex" }}>
      {editing ? (
        <>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              style={{
                fontSize: "1.5em",
                fontWeight: "bold",
              }}
              placeholder="Name"
              value={updatedNote.name}
              onChange={({ target: { value: name } }) =>
                setUpdatedNote({ ...updatedNote, name })
              }
            />
            <textarea
              style={{
                marginTop: "0.2rem",
                fontSize: "0.75em",
              }}
              placeholder="Content"
              value={updatedNote.content}
              onChange={({ target: { value: content } }) =>
                setUpdatedNote({ ...updatedNote, content })
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
            <button onClick={handleEditSave}>Save</button>
            <button style={{ marginTop: "0.2rem" }} onClick={handleEditCancel}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2>{note.name}</h2>
            <p>{note.content}</p>
          </div>
          <div
            style={{
              marginLeft: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button onClick={handleEdit}>Edit</button>
            <button style={{ marginTop: "0.2rem" }} onClick={handleDelete}>
              &times;
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Note
