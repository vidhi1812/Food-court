import React, { useState } from 'react'
import "../Food Item/FoodItem.css"
import { assets } from '../../Assests/Images/assets'

 const FoodItem = ({id,name,price,description,image}) => {

  const[itemCount, setItemCount]=useState(0);
  return (
    <div className='food-item'>
        <div className="food-item-cont">
            <img src={image} alt=""  className='food-item-img'/>
            {
              !itemCount?<button className='add' onClick={()=>setItemCount(prev=>prev+1)}>Add</button> 
             :
              <div className='food-counter'>
                <img  onClick={()=> setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" srcset="" />
                <p>{itemCount}</p>
                <img  onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" srcset="" />

              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-rating">
                <p> {name}</p>
              <img src={assets.rating_starts} alt=""/>
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'> ${price}</p>
        </div>
    </div>
  )
}
export default FoodItem;
