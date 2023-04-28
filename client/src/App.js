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
import Team from "./components/team";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/navbar";
import Data from "./components/getData"
import footer from "./components/footer";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient_bg">

          <Routes>
            <Route path="/" element={<><Navbar /><Dashboard /></>} />
            <Route path="/about" element={<><Navbar /><About /></>} />
            <Route path="/home" element={<><Navbar/> <Home /> </>} />
            <Route path="/team" element={<><Navbar /><Team /></>} />
            {/* <Route path="/getData" element={<><Navbar />
            <Data /> </>} /> */}

          </Routes>
        </div>
      </div>
    </BrowserRouter>


  );
}

export default App;
