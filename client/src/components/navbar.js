import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
// import Logo from '../../assets/logo.svg';
import './navbar.css';


const Menu = () => (
    <>
        <div className='navheads'>
                <p>
                <a href='/'>Home</a></p>
            </div>
        <div className='navheads'>
                <p>
                  
                <a href='/About'>About</a>
                
                
                </p>
            </div>
        <div className='navheads'>
                <p>
                <a href='#Team'>Team</a></p>
            </div>
      
       
    </>
)
const Navbar = () => {
    const [togglemenu, setTogglemenu] = useState(false);
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src="" alt="logo" />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <Link to="Home">
                    <button type='button'>Get Started</button>
                </Link>
            </div>
            <div className='gpt3__navbar-menu'>
                {togglemenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setTogglemenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setTogglemenu(true)} />

                }
                {togglemenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <Menu />
                            <div className='gpt3__navbar-menu-container-links-sign'>
                                <Link to="Home" >
                                <button type='button'>Get Started</button>

                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Navbar