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

 useEffect(()=>{
   console.log(cartItems);
 },[cartItems])
   const  contextValue={
food_list,
cartItems,
setCartItems,
addToCart, 
removeFromCart
     }
        return(
            <StoreContext.Provider value={contextValue}>
            {props.children}
            </StoreContext.Provider>
        )
     
}

export default  StoreContextProvider;