import React from 'react'
import {useState} from 'react'
import Taskcard from './Taskcard'
const Addtasked=({listdata,showDelmodel})=>{
let listD=listdata?.map((item,i)=>{
return  <Taskcard listId={item.id}key={i} showDelmodel={()=>showDelmodel(item.id,item.title)}
  createdon={item.createdon} title={item.title} desc={item.description}
    date={item.date}/>

})
  return(
    <div>
    {listD}
    </div>
  )
}


export default Addtasked;
