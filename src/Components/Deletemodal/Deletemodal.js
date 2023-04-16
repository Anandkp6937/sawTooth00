import React from 'react'
import './deletemodal.css'

const Deletemodal=({id,title,cancelDelmodal,deleteItem})=>{
return(
  <div className="deletemodal">
  <div className="main-dialoge-box">
<h3>
Are You sure want to delete?
</h3>
<h1 id="h5">{id}</h1>
<h1 id="h5">{title}</h1>
<div>
<button onClick={()=>deleteItem(id)}>Yes</button>
<button onClick={cancelDelmodal}>Cancel</button>
</div>
  </div>
  </div>
)
}
export default Deletemodal;
