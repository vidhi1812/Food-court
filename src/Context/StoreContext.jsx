import { createContext, useEffect, useState } from "react";
import {food_list} from "../Assests/Images/assets"

export const StoreContext= createContext(null);
const StoreContextProvider=(props)=>{
 const[cartItems, setCartItems]=useState({});
 const addToCart=(itemId)=>{
   setCartItems((prev)=>{
      const newCart={...prev};
       if(!newCart[itemId]){
         newCart[itemId]=1;
       }
       else{
         newCart[itemId]+=1;
       }
       return newCart;
   });

 };
 const removeFromCart=(itemId)=>{
   setCartItems((prev)=>{
       const newCart={...prev};
       if(newCart[itemId] > 1){
         newCart[itemId]-=1;
       }
       else{
         delete newCart[itemId];
       }
       return newCart;
   });
 };
 const getTotalCartAmount=()=>{
  let totalA=0;
  for(const item in cartItems){

    if(cartItems[item]>0){
      let itemInfo=food_list.find((product)=>product._id === item);
      totalA += itemInfo.price*cartItems[item];
    }
    
  }
return totalA;
 }

   const  contextValue={
food_list,
cartItems,
setCartItems,
addToCart, 
removeFromCart,
getTotalCartAmount
     }
        return(
            <StoreContext.Provider value={contextValue}>
            {props.children}
            </StoreContext.Provider>
        )
     
}

export default  StoreContextProvider;