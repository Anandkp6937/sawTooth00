import React from 'react'
import {useState} from 'react'
import './modal.css'
const Modal=({closeAddtask,handleDate,handleDesc,handleTilte,onSub})=>{

  return(
    <div className="full-modal">

    <div className="dialogeBox">

    <div className="dnav">
    <h1>Create Task</h1>
    <h1 id="x" onClick={closeAddtask}>X</h1>
    </div>

    <div className="inputs">

    <form className="form-add">
    <div className="formfields">
    <p>Tilte</p>
    <input type="text" name="title" placeholder="task title"  required  maxLength="65" onChange={handleTilte}/>
    <p>description</p>
    <input type="text"  name="desc" placeholder="short description of task"    maxLength="100"  required  onChange={handleDesc}/>
    <p>Last date</p>
    <input type="date"    name="date"  required onChange={handleDate} />
    <div className="check-remind">
    <input type="checkbox" />
    <p>Reminder</p>
    </div>
<input type="submit" name="submit" onClick={onSub} value="Add task"/>
    </div>
    </form>

    </div>

    </div>

    </div>
  )
}
export default Modal;
