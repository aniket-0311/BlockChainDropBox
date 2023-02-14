import React from 'react'
import Home from './home';
import { Link } from "react-router-dom";
import './Dashboard.css';
import Navbar from './navbar';
import Header from './Header';
function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='gradient__bg_1'>
        <Navbar />
        <Header />
        </div>
      
                
    </div>
  );
}

export default Dashboard;