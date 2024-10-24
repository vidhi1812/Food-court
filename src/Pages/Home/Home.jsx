import React, { useState } from 'react';
import "../Home/Home.css";
import Header  from '../../Component/Header/Header';
import Menu from '../../Component/Explore Menu/Explrmnu';
import  FoodDisplay  from '../../Component/Food Display/fooddisp';
import  Appdownload  from '../../Component/AppDownload/Appdownload';

 const Home = () => {

  const[category, setCategory]= useState("All");
  return (
    <div>
        <Header/>
        <Menu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Appdownload/>
    </div>
  )
}
export default Home;