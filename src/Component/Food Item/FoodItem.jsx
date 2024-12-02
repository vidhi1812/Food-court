import React, { useContext } from "react";
import "../Food Item/FoodItem.css";
import { assets } from "../../Assests/Images/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, description, image, rating }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className={`food-item ${cartItems?.[id] ? "selected" : ""}`}>
      <div className="food-item-cont">
        <img loading="lazy" src={image} alt={name} className="food-item-img" />
        {!cartItems?.[id] ? (
          <button
            className="add"
            onClick={() => addToCart(id)}
            aria-label={`Add ${name} to cart`}
          >
            Add
          </button>
        ) : (
          <div className="food-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt={`Remove one ${name} from cart`}
              className="remove"
            />
            <p className="count">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt={`Add one more ${name} to cart`}
              className="addi"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{name}</p>
          <div>
            {Array.from({ length: rating }, (_, i) => (
              <img key={i} src={assets.rating_star} alt="star" />
            ))}
          </div>
        </div>
        <p className="food-item-desc">{description || "No description available."}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
