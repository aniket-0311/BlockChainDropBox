import React from 'react'
import TeamImage from '../assets/AniketTeam.jpeg'
import TeamImage1 from '../assets/DakshTeam.jpg'
import './cards.css';
function card() {
    return (
        <>
            <div class="box">
      <div class="card">
        <div class="imgBx">
            <img src={TeamImage} alt="images"/>
        </div>
        <div class="details">
            <h2>Aniket Desai<br/><span>Backend Developer</span></h2>
        </div>
      </div>
    
       <div class="card">
         <div class="imgBx">
            <img src={TeamImage1} alt="images"/>
         </div>
         <div class="details">
            <h2>Daksh Singh<br/><span> Frontend Developer</span></h2>
          </div>
       </div>

       <div class="card">
         <div class="imgBx">
            <img src="" alt="images"/>
         </div>
         <div class="details">
            <h2>Mukesh Choudhary<br/><span>Backend Developer</span></h2>
          </div>
       </div>
 
  </div>
        </>
    )
}

export default card