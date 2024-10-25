import React, { useState } from 'react';
import "../LoginPage/login.css";
import { assets } from '../../Assests/Images/assets';
 const Login = ({setShowlogin}) => {
    
    const[currState,setcurrState]=useState("Login")
  return (
    <div className='login'> 
        
    <form action="" className="login-pop-con">
        <div className="popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=> setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState === "Login" ?<></>:<input type="text"  placeholder='Your Name' required/>}
            
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Your Password' required />
        </div>
        <button > {currState === "Sign Up" ? "Create Account":"Login"} </button>
        <div className="login-condition">
            <input type="checkbox" required />
            <p> By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState ===  "Login"
        ? <p className='parasi'>Create a new account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
       : <p className='parasi'> Already have an account?<span onClick={()=>setcurrState("Login")}>Login here</span></p>
       }
       
        
    </form>

    </div>
  )
}
export default Login;