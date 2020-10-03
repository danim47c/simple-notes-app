import { db, dbTypes } from 'client'
import React, { useState } from 'react'

const BaseNote = ({ name, content, buttons }) => (
  <div style={{ display: "flex", width: "60%" }}>
    <div style={{ display: "flex", width: "80%", flexDirection: "column", justifyContent: "center" }}>
      {name}
      {content}
    </div>
    <div style={{ marginLeft: "2rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {buttons}
    </div>
  </div>
)

const EditingNote = ({ note, setEditing }) => {
  const [updatedNote, setUpdatedNote] = useState({ name: note.name, content: note.content })

  const editNote = () => {
    db.collection('notes').doc(note.id).update({
      ...note,
      ...updatedNote,
      updatedAt: dbTypes.FieldValue.serverTimestamp()
    })
  }

  const handleSave = () => {
    editNote()

    setEditing(false)
  }
  const handleCancel = () => setEditing(false)

  return <BaseNote
    name={
      <input
        style={{
          fontSize: "1.17em",
          fontWeight: "bold",
          width: "60%",
        }}
        placeholder="Name"
        value={updatedNote.name}
        onChange={({ target: { value: name } }) =>
          setUpdatedNote((updatedNote) => ({ ...updatedNote, name }))
        }
      />}
    content={<textarea
      style={{ margin: "0.5rem 0", width: "60%" }}
      placeholder="Content"
      value={updatedNote.content}
      onChange={({ target: { value: content } }) =>
        setUpdatedNote((updatedNote) => ({ ...updatedNote, content }))
      } />}
    buttons={<>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </>}
  />
}

const NormalNote = ({ note, setEditing }) => {
  const handleEdit = () => setEditing(true)
  const handleDelete = () => db.collection("notes").doc(note.id).delete()

  return <BaseNote
    name={<h3>{note.name}</h3>}
    content={<p>{note.content}</p>}
    buttons={<>
      <button onClick={handleEdit} >Edit</button>
      <button onClick={handleDelete} >Delete</button>
    </>}
  />
}

const Note = ({ note }) => {
  const [editing, setEditing] = useState(false)

  return editing ? <EditingNote note={note} setEditing={setEditing} /> : <NormalNote note={note} setEditing={setEditing} />
}

export default Note