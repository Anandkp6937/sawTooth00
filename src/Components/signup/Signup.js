import React from 'react'
import Mainlogo from '../mainlogo/Mainlogo'
const Signup=({signUp,handleFormS})=>{
return(
<div>


<Mainlogo/>

<h1 id="h1">Sign up</h1>

<div className="signup">


<form className="form-add loginform">

    <div className="flexy">
    <div className="namy">
    <p>Name</p>
    <input type="text" name="name" placeholder="Enter your name" onChange={handleFormS}/>
    <p>Email</p>
    <input type="text" name="email" placeholder="Enter your email" onChange={handleFormS}/>
    </div>

    <div className="passw">
    <p>Password</p>
    <input type="password" name="password"placeholder="create your password" onChange={handleFormS}/>
    </div>

    </div>

    <input type="Submit" defaultValue="signup" onClick={signUp}/>
    <h5 className="redirect" onClick={()=>alert("login")}>Login</h5>
</form>

</div>
</div>
)

}
export default Signup;
