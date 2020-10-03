import React, { useState } from "react"
import NewNoteDialog from "./dialog"

const NewNote = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <button onClick={handleClick}>New</button>

      {open && <NewNoteDialog onClose={handleClose} />}
    </>
  )
}

export default NewNote
