import React from "react";
import { useState } from "react";
import {Routes,Route} from "react-router-dom"
import api from "./services/api";
import Home from "./components/Home"
import GetImage from "./components/GetImage"


const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/image-card" element={<GetImage/>}/>
    </Routes>
  ) 
};

export default App;
