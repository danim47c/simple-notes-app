import React from "react"
import firebase from "firebase/app"
import "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import Note from "./note"

const NoteList = () => {
  const [notes, loading] = useCollectionData(
    firebase.firestore().collection("notes"),
    {
      idField: "id",
    }
  )

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
