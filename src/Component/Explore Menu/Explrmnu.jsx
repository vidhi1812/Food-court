import React from 'react'
import "../Explore Menu/Explrmnu.css"
import {menu_list} from "../../../src/Assests/Images/assets"
 const Menu = ({category, setCategory}) => {
  return (
   

<div className="explore-menu" id='explore-menu'>
    <h1>Explore Our Menu</h1>
    <p className='menu-txt'>Choose from a diverse menu featuring a delectable array of dishes. Our  mission is  to stisfy your cravings and elevate your dining experience , one delicious meal at a time    </p>
    <div className="explor-men-lis">
        {menu_list.map((item,index)=>{
            return(
                <div  onClick={()=> setCategory(prev=>prev === item.menu_name ?"All":item.menu_name )}key={index} className='explr-men-list-item'>
                <img  className={category === item.menu_name?"active" :""}src={item.menu_image} alt=''/>
                <p className={category === item.menu_name?"acti" :""}>{item.menu_name}</p>
                </div>
            )
            
        })}
    
  </div>
  <hr/>
</div>
   
  )
}
export default Menu;