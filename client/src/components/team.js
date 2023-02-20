import React from 'react'
import './team.css';
import Card from './card';
function team() {
  return (
    <>
      <div className='team_container bg_gradient_team'>
        <div className='team_title'>
          <h1 className='heading_team'> Our Team</h1>
        </div>
        <div className='card_container'>
          <Card />
        </div>
      </div>
    </>
  )
}

export default team