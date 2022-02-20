import React from 'react'
import AddNote from './AddNote'
import Note from './Note'



function NotesList({notes,handleAddNote,handleDeleteNote}) {
  return (
    <div className="notes-list">
       {notes.map((propsFromBehind)=>(
         <Note 
          id={propsFromBehind.id}
          text={propsFromBehind.text}
          date={propsFromBehind.date}
          handleDeleteNote={handleDeleteNote}
          />
       ))}
        <AddNote 
            handleAddNote={handleAddNote}
            />
    </div>
  )
}

export default NotesList