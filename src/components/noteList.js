import React from "react"
import firebase from "firebase/app"
import "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"

const NoteList = () => {
  const [notes, loading] = useCollectionData(
    firebase.firestore().collection("notes")
  )

  return loading ? (
    <div>Loading...</div>
  ) : !notes.length ? (
    <div>No has creado ninguna nota aun</div>
  ) : (
    notes.map((note) => (
      <div>
        <h2>{note.name}</h2> <p>{note.content}</p>
      </div>
    ))
  )
}

export default NoteList
