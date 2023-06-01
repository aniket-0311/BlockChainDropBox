import React from "react";
import "./about.css";
import Image1 from "../assets/aboutImage2.jpg";
import Image2 from "../assets/aboutImage3.jpg"

function about() {
  return (
    <>
{/* <img src="https://kripeshadwani.com/wp-content/uploads/2021/05/Decentralized-Storage.jpg"></img> */}
  <div className="container">

      <div className="section">
          <div class="inner-image">
            <img src="https://kripeshadwani.com/wp-content/uploads/2021/05/Decentralized-Storage.jpg" alt='images'/>
          </div>
          <div class="inner-text">
            <h5 className="gradient__text">
              Why Decentralised Dropbox?
            </h5>
            <p class="swift-up-text">
              Data stored on these networks is encrypted before being stored on the network, 
              and no single computer holds enough chunks of the file to piece together the 
              puzzle and deduce what is contained within the file.
            </p>
          </div>
      </div>

      <div className="section">
          <div class="inner-text side-change">
            <h5 className="gradient__text">
              Privacy & Security
            </h5>
            <p class="swift-up-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, 
              but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
          </div>
          <div class="inner-image image-side-change">
            <img src={Image1} alt='images'/>
          </div>
      </div>

      <div className="section">
          <div class="inner-image">
            <img src={Image2} alt='images'/>
          </div>
          <div class="inner-text">
            <h5 className="gradient__text">
              File Sharing
            </h5>
            <p class="swift-up-text">
            It can be a hassle sharing or sending large files from your mobile device, you’ll need to 
            upload each file before sharing—a time-consuming process when you’re away from Wi-Fi.
            But, you could skip the hassle by using a link sharing app to send all of your large, 
            uncompressed files. By creating a secure link to share.
            </p>
          </div>
      </div>

  </div>


        
    {/* </div> */}
      {/* <div className='About '>
        <div className='title'>
          <h1 className='title_head'>Decentralised Dropbox</h1> </div>
        <div className='para'> <p>Lorem ipsum dolor sit amet. Est atque explicabo quo omnis laborum sed sint autem ut impedit dolor qui ipsa consequatur sit eligendi molestiae. Ab expedita facilis et vitae nobis qui consequatur minus aut ipsum quibusdam ea beatae inventore et sapiente labore. Sit rerum repellendus eum praesentium ratione ex illo deleniti ut repudiandae unde sed galisum officiis?

          Aut quia vitae ab laboriosam veniam ut quas blanditiis. Sit delectus nemo eos eveniet autem ut fugiat doloribus in velit eius ea delectus consequatur.

          Et quaerat optio ut quisquam consequatur non repudiandae mollitia. A alias voluptatibus ut nulla quam sit galisum quasi est veritatis impedit nam adipisci voluptatibus qui voluptas tenetur in dolor odio. Ut nulla quasi qui aliquid iste id rerum dolorem id doloribus consequatur sit quos obcaecati. Et soluta officia eos minima veritatis qui dolorum Quis ut quibusdam magnam qui perferendis voluptate sed iste debitis et deserunt nobis!</p></div>
      </div> */}
    </>
  );
}


export default about;
