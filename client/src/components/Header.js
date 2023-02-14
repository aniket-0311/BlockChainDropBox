import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
// 
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Utilize the most accumulated decentralised database</h1>
        <p >dsjkfnskf sdkjbfdsbfksd sfbsjfbs dbfdsbfs dsubfkdsbf djjdjdfnfs sjkdbfds fsdjksjkds vsdkk </p>
        <div className='gpt3__navbar-sign'>
                <Link to="home">
                    <button type='button'>Get Started</button>
                </Link>
            </div>
        <div className='gpt3__header-content__people'>
          <img src="" alt='sasfas' />
          <p>1,600 people requested access a visit in last 24 hours</p>

        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src='' alt='sfsa' />
      </div>
    </div>
  )
}

export default Header