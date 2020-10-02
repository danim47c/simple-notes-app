import Layout from "components/layout"
import NewNote from "components/newNote"
import NoteList from "components/noteList"
import React from "react"

const App = () => (
  <Layout>
    <NewNote />
    <br />
    <NoteList />
  </Layout>
)

export default App
