import React from 'react'
import './login.css'
import Mainlogo from '../mainlogo/Mainlogo'
const Login=({login,handleFormS,newtext})=>{
return(
<div>

<div>
<Mainlogo/>
</div>
<div>
{
  newtext=='active'
  ?
  <h1 id="h1"> Now Login Here</h1>
  :
  <h1 id="h1">Login Here</h1>
}
<div className="signup">
<form className="form-add loginform">
<p>Email</p>
<input type="text" name="email" placeholder="Enter your email" onChange={handleFormS}/>
<p>Password</p>
<input type="password" name="password" placeholder="Enter your password" onChange={handleFormS}/>
<h5 id="h6">forgot password?</h5>
  <input type="Submit" defaultValue="login" onClick={login}/>
  <h5 className="redirect">sign up</h5>
</form>
</div>
</div>
</div>

)

}
export default Login;
