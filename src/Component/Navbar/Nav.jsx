import React, { useState } from 'react';
import "../Navbar/Nav.css"
import logo from "../../../src/Assests/Images/foodie.jpg"
import { assets } from '../../Assests/Images/assets';

 const Nav = () => {

  const[menu, setMenu]=useState(" ");
  return (
    <div className="food">
        <img src={logo} alt=""  className='logo'/>
        <ul className='ullist'>
            <li  onClick={()=>setMenu("home")} className={menu === "home" ? "active": " "} >Home</li>
            <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active": " "}>Menu</li>
            <li  onClick={()=>setMenu("mobile-app")}  className={menu === "mobile-app" ? "active": " "}>Mobile-apps</li>
            <li  onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active": " "}>Contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=""  className='search'></img>
                <div className="navbar-search">
                  <img src={assets.basket_icon}alt="" />
                  <div className="dot"></div>
                </div>
                <button className="btn2">Sign In</button>
            </div>
       
    </div>
  )
}
export default Nav;