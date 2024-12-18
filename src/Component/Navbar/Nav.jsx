import React, { useContext, useState } from 'react';
import "../Navbar/Nav.css"
import logo from "../../../src/Assests/Images/foodie.jpg"
import { assets } from '../../Assests/Images/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

 const Nav = ({setShowlogin}) => {

  const[menu, setMenu]=useState(" ");
  const{getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className="food">
      <Link to='/'>  <img src={logo} alt=""  className='logo'/></Link>
        <ul className='ullist'>
            <li  onClick={()=>setMenu("home")} className={menu === "home" ? "active": " "} >Home</li>
            <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active": " "}>Menu</li>
            <li  onClick={()=>setMenu("mobile-app")}  className={menu === "mobile-app" ? "active": " "}>Mobile-apps</li>
            <li  onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active": " "}>Contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt=""  className='search'></img>
                <div className="navbar-search">
                 <Link to='/cart'><img src={assets.basket_icon}alt="" /></Link> 
                  <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button className="btn2" onClick={()=>setShowlogin(true)}>Sign In</button>
            </div>
       
    </div>
  )
}
export default Nav;