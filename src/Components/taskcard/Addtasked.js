import React from 'react'
import {useState} from 'react'
import Taskcard from './Taskcard'
const Addtasked=({listdata,showDelmodel,showDonemodel})=>{
let listD=listdata?.map((item,i)=>{
return  <Taskcard listId={item.id}key={i} showDelmodel={()=>showDelmodel(item.id,item.title)}
  showDonemodel={()=>showDonemodel(item.title,item.id)} createdon={item.createdon} title={item.title} desc={item.description}
    date={item.date}/>

})
  return(
    <div>
    {listD}
    </div>
  )
}


export default Addtasked;
