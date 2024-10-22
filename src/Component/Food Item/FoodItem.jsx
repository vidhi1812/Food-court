import React, { useContext } from "react";
import "../Food Item/FoodItem.css";
import { assets } from "../../Assests/Images/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-cont">
        <img src={image} alt={name} className="food-item-img" />
        {!cartItems[id] ? (
          <button className="add" onClick={() => addToCart(id)}>
            Add
          </button>
        ) : (
          <div className="food-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="remove"
            />
            <p className="count">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="addi"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p> {name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price"> ${price}</p>
      </div>
    </div>
  );
};
export default FoodItem;
