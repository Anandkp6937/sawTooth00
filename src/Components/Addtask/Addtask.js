import React from 'react'
import './addtask.css'
import Logoimg from './Component 6.png'
const Addtask=({handleInputsT,handleInputsDe,handleInputsD,onSub})=>{
  return(
    <div>
          <h1 className="heading">Add task</h1>

    <form className="form-add">
    <div className="formfields">
    <p>Tilte</p>
    <input type="text" name="title" placeholder="task title"  required onChange={handleInputsT} maxLength="65" />
    <p>description</p>
    <input type="text"  name="desc" placeholder="short description of task"   onChange={handleInputsDe}  maxLength="100"  required/>
    <p>Last date</p>
    <input type="date"    name="date" onChange={handleInputsD} required/>
    <div className="check-remind">
    <input type="checkbox"/>
    <p>Reminder</p>
    </div>
<input type="submit" name="submit" onClick={onSub}  value="Add task"/>
</div>
    </form>
    </div>
  )
}
export default Addtask;
