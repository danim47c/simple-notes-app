import React from "react"
import { useCollectionData } from "react-firebase-hooks/firestore"

import firebase from "firebase"
import "firebase/firestore"
import Note from "./note"

const NoteList = () => {
  const [notes, loading] = useCollectionData(
    firebase.firestore().collection("notes"),
    {
      idField: "id",
    }
  )

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "4rem",
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : !notes?.length ? (
        <p>You haven't created any note yet {JSON.stringify(notes)}</p>
      ) : (
        notes.map((note, i) => (
          <React.Fragment key={note.id}>
            {!!i && <hr style={{ width: "5%" }} />}
            <Note note={note} />
          </React.Fragment>
        ))
      )}
    </div>
  )
}

export default NoteList
