import React from "react";
import { useState } from "react";
import {Routes,Route} from "react-router-dom"
import api from "./services/api";
import Home from "./components/Home"
import ImagePage from "./components/ImagePage"


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/image-page" element={<ImagePage/>}/>
    </Routes>
  ) 
};

export default App;
