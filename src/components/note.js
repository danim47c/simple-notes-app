import React from "react"

const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.name}</h2> <p>{note.content}</p>
    </div>
  )
}

export default Note
