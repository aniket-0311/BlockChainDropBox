import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";
import Home from "./components/home";
import About from "./components/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar";

function App() {
  
  return (
    <BrowserRouter>
    <div className="App"> 
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<><Navbar/><About /></> } />
        <Route path="/home" element={<Home />} />

    </Routes>
    </div>
    </BrowserRouter>
      
    
  );
}

export default App;
