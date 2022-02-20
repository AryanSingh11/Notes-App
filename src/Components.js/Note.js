import React from 'react'
import {AiFillDelete} from 'react-icons/ai'


function Note({id, text, date, handleDeleteNote}) {
    // var date= new Date() 
    // var hours= date.getHours()
    // var minutes= date.getMinutes
    // var datte= date.getDate
    // var day= date.getDay
    // var year= date.getFullYear
    // var month= date.getMonth

  return (
    <div className='note'> 
      <span>{text}</span>

      <div className='note-footer'> 
      
        <div>{date}</div>
        <AiFillDelete  
            className='delete-icon' 
            size='20px'
            onClick={()=>handleDeleteNote(id)}
          />
      </div>
    
      
      

    </div>
   
  )}

export default Note
