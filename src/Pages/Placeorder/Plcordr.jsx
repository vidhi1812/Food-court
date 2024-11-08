import React, { useContext } from "react";
import "../Placeorder/plcordr.css";
import { StoreContext } from "../../Context/StoreContext";

const Plcordr = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title"> Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="First Name " />
          <input type="text" placeholder="last Name " />
        </div>

          <input type="text" placeholder="Email" />
        
       
          <input type="text" placeholder="Street" />
          
        <div className="multi-field">
          <input type="text" placeholder="City " />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="ZipCode " />
          <input type="text" placeholder="Country" />
        </div>
        
         
          <input type="number" placeholder="Phone" />
      
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2> Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() ===0 ?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0?0:getTotalCartAmount()+2}</b>
            </div>
            <button> Proceed To Payment</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Plcordr;
