import React from 'react'
import './deletemodal.css'

const Deletemodal=({id,title,cancelDelmodal,deleteItem,dialogeType,donedItem})=>{
return(
  <div className="deletemodal">

  {
    dialogeType==='done'
  ?
  <div className="main-dialoge-box" id="green">
  <h3>Did you complete the task?</h3>
  <h1 id="h5" className="doneT">{title}</h1>
  <div>
  <button id="greenB"onClick={()=>donedItem(id)}>Yes</button>
  <button  onClick={cancelDelmodal} id="cancelBtn">No</button>
  </div>
  </div>


  :
  <div className="main-dialoge-box" id="red-box">
  <h3 id="redcolor">Are You sure want to delete?</h3>
  <h1 id="h5" className="delT">{title}</h1>
  <div>
  <button onClick={()=>deleteItem(id)} id="redbutton">Yes</button>
  <button onClick={cancelDelmodal} id="cancelBtn">Cancel</button>
  </div>
  </div>

  }

  </div>




)
}
export default Deletemodal;
