import React, { useState } from "react"
import NewNoteDialog from "./dialog"

const NewNote = () => {
  const [open, setOpen] = useState(true)

  const handleClick = () => setOpen(!open)

  return (
    <>
      <button onClick={handleClick}>New</button>

      {open && <NewNoteDialog />}
    </>
  )
}

export default NewNote
