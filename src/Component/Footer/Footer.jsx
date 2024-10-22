import React from 'react'
import "../Footer/Footer.css"
import logo from "../../../src/Assests/Images/foodie.jpg"
import { assets } from '../../Assests/Images/assets';
 const Footer = () => {
  return (
    <div className='footer' id='footer'>
   <div className="footer-cont">
     <div className="footer-cont-left">
        <img src={logo} alt=""  className='logo'/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti fugiat possimus libero debitis, consequuntur maiores modi velit labore nobis necessitatibus dolorum delectus ducimus est repudiandae nihil sunt voluptatem corporis ratione.</p>
      <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
      </div>
     </div>
   <div className="footer-cont-center">
   <h2> COMPANY</h2>
   <ul>
    <li>Home</li>
   <li>About Us</li>
   <li>Delivery</li>
   <li>Privacy Policy</li>
   </ul>
   </div>
   
   <div className="footer-cont-right">
    <h2>GET IN TOUCH</h2>
    <ul>
        <li>918787678998</li>
        <li>contact@restro.com</li>
    </ul>
    </div> 
   </div>  
   <hr />
    <p className="foot-copy">
    Copyright 2024 restro.com - LL Right Reserved.</p>
        
    </div>
  )
}
export default Footer;