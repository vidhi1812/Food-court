import React, { useState } from 'react';
import "../LoginPage/login.css";
import { assets } from '../../Assests/Images/assets';
 const Login = ({setShowlogin}) => {
    
    const[currState,setcurrState]=useState("Sign-up")
  return (
    <div className='login'> 
        
    <form action="" className="login-pop">
        <div className="popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=> setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            <input type="text"  placeholder='Your name' required/>
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Your password' required />
        </div>
        <button> {currState === "Sign Up"}</button>
    </form>

    </div>
  )
}
export default Login;