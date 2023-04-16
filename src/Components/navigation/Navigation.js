import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSort,faCircleChevronLeft,faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import './navigation.css'
const Navigation=({callAddtask})=>{
  return(
<div className="navigation">
<h2>Tasks</h2>
<div className="sort-prev">
<FontAwesomeIcon title="Addtask" className="icons" icon={faCirclePlus} onClick={callAddtask}/>
{
  /*<FontAwesomeIcon title="Sort" className="icons" icon={faSort}/>
<FontAwesomeIcon title="Dtasks" className="icons" icon={faCircleChevronLeft} />*/
}
</div>
</div>
  )
}
export default Navigation;
