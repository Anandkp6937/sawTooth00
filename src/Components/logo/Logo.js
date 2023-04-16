import React from 'react'
import Logoimg from './Component 6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import './logo.css'
const Logo=({user})=>{

  return(
    <div className="logo">
<img src={Logoimg} alt="logo-of-app"/>
<h1 className="heading">SawTooth</h1>

  <div className="profile">
  <FontAwesomeIcon title="show profile"className="icons"icon={faUser} />
  <h4>{user}</h4>

  </div>
    </div>
  )
}
export default Logo;
