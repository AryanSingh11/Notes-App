import React from "react";
import { useState } from "react";


const AddNote =({handleAddNote})=>{

    const [notestext, setnotestext] = useState('')
    const characterLimit = 200;

    function handleChange(event){
        if(characterLimit-event.target.value.length >=0){
            setnotestext(event.target.value)
        }
        
    }
   
    const handleClickSave=()=>{
        if(notestext.trim().length>0){
            handleAddNote(notestext);
        }
        setnotestext((notestext)=>(''));

    }
        // OR
        // function handleClickSave(){
        //     handleAddNote(notestext)
        // }
      
     

        console.log(notestext);
       
        
    return(
        <div className="note-new">
            <textarea
                rows='8'
                cols='10'
                placeholder="Type to add note"
                onChange={handleChange}
            >
            </textarea>
            <div
              className='note-footer'>
                  <small>{characterLimit- notestext.length} left</small>
                  <button className="save" onClick={handleClickSave}>Save</button>
                </div>
        </div>
    )
}

export default AddNote;