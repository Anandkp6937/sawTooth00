import React from 'react'
import './taskcard.css'

const Taskcard=({createdon,title,desc,date,listId,showDelmodel})=>{

  return(

    <div className="taskcard">
    <h3>CreatedOn <span>{createdon}</span></h3>

<div className="taskcard-margin">

    <div className="maincard">
    <h1>{title}</h1>
    <h1>{date}</h1>
    </div>

    <div className="task">
    <h4>{desc}</h4>
    </div>
    <div className="btns">
    <button className="delete" onClick={showDelmodel}>Delete</button>
    <button className="done">Done</button>
    </div>
</div>
    </div>

  )
}

export default Taskcard;
