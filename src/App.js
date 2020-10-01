import React from "react"
import Layout from "./components/layout"
import NoteList from "./components/noteList"

function App() {
  return (
    <Layout>
      <NoteList />
    </Layout>
  ) //hola es el children de layout
}

export default App
