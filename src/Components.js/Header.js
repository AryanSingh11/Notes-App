import React, { useState } from 'react'

function Header({handleToggleDarkMode}) {

  return (
    <div className='header'>
       <h1>Notes</h1>
       <button onClick={
           ()=>{handleToggleDarkMode(
               (prevState)=>!prevState)
               }
            }
            className='switch-button'
            >Switch Mode</button>
        
    </div>
  )
}

export default Header;