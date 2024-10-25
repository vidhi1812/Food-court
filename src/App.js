import React, { useState } from "react";
import './App.css';
import Nav from "../src/Component/Navbar/Nav";
import {Route, Routes } from "react-router-dom";
import  Home  from "./Pages/Home/Home";
import Cart  from "./Pages/Cart/Cart";
import Plcordr from "./Pages/Placeorder/Plcordr"
import  Footer from "../src/Component/Footer/Footer";
import Login from "./Component/LoginPage/login";

function App() {

  const[showlogin, setShowlogin]=useState(false);
  return (
    <>

    {showlogin?<Login/>:<></>}
    <div className="App">

      <Nav setShowlogin={setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Plcordr/>}/>

       
      </Routes>

    </div>
    <Footer/>
    </>
  );
}

export default App;
