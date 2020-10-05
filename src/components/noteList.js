import React, { useEffect, useState } from "react"
import firebase from "firebase/app"
import "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import Note from "./note"

const NoteList = () => {
  const [notes, setNotes] = useState()
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("notes")
      .onSnapshot((snap) =>
        setNotes(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      )
    return unsubscribe
  }, [])

  return loading ? (
    <div>Loading...</div>
  ) : !notes.length ? (
    <div>No has creado ninguna nota aun</div>
  ) : (
    notes.map((note) => (
      <React.Fragment key={note.id}>
        <Note note={note} />
      </React.Fragment>
    ))
  )
}
export default NoteList
