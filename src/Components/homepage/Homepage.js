import React from 'react'
import Mainlogo from '../mainlogo/Mainlogo'
import './homepage.css'
const Homepage=({changeRoute})=>{
  return(
    <div>
    <Mainlogo/>

    <div className="homepage">
    <p className="app-desc">
  A simple Progressive Web App to manage your day to day task
  and future plans
    </p>
    </div>
    <div className="sign">
    <button className="signbtn signup" onClick={()=>changeRoute("signin")}>Sign In</button>
    <button className="signbtn signin" onClick={()=>changeRoute("login")}>Login</button>
    </div>
    </div>
  )
}
export default Homepage;
