import React from 'react'
import './cards.css';
function card() {
    return (
        <>
            <div class="box">
                <div class="card-team">
                    <div class="imgBx">
                        <img src="" alt="images" />
                    </div>
                    <div class="details">
                        <h2>Aniket Desai<br /><span>Developer</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx">
                        <img src="" alt="images" />
                    </div>
                    <div class="details">
                        <h2>Mukesh Choudhary<br /><span>Developer</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx">
                        <img src="" alt="images" />
                    </div>
                    <div class="details">
                        <h2>Daksh Singh<br /><span>Developer</span></h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default card