import React, {useState, useEffect} from 'react'
import NotesList from './Components.js/NotesList'
import {nanoid} from 'nanoid'
import AddNote from './Components.js/AddNote'
import Header from './Components.js/Header'

function App() {

  const [notes, setNotes]= useState([
    {
        id: nanoid(),
        text:"This is my first Note",
        date:"19/2/22",
    },
    {
      id: nanoid(),
      text:"This is my Second Note",
      date:"20/2/22",
    },
    {
      id: nanoid(),
      text:"This is my third Note",
      date:"21/2/22",
    }
    
  ])

      const [darkMode, setDarkMode]= useState(true)

      useEffect(() => {
        const savedNotes=JSON.parse(
          localStorage.getItem('react-notes-app-data')
        )

        if (savedNotes){
          setNotes(savedNotes)
        }
      }, [])
      

      useEffect(() => {
        localStorage.setItem(
          'react-notes-app-data',
          JSON.stringify(notes)
        )
      }, [notes])
      

      const addNote = (text)=>{
          const date= new Date();
          const newNote={
            id:nanoid(),
            text: text,
            date:date.toLocaleDateString()
          }
          const newNotes =[...notes, newNote];
          setNotes(newNotes)
      }


      const deleteNote=(id)=>{
        const newNotes=notes.filter((note)=>note.id!==id)
        setNotes(newNotes)
      }

     

  return (
    <div className={`${darkMode && 'dark-mode'} `}>

<div className='container'>
    <Header handleToggleDarkMode={setDarkMode}/>
    <NotesList 
      notes={notes} 
      handleAddNote={addNote} 
      handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  )
}

export default App
