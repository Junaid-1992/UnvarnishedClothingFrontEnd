import React from "react";

import delet from "../../assets/Images/delete 1.png"
import email from "../../assets/Images/email.png"
import sezancard from "../../assets/Images/sezancard.png"
const UsersA = () => {

  return (

    <>
      <div className="my-page">
        <div className="ahti-list-1">
          <div className="ahti-imger">
            <div className="ahti-imger-pic">
              <img src={email} alt="" />
            </div>

            <h2>jdoe@gmail.com   </h2>
          </div>
          <p>joined june 2024</p>
        </div>

        <div className="user-reviews-box">
          <h2>user’s reviews</h2>
          <div className="user-reviews-card">
            <div class="item1--ar1 hello-buddy" >
              <div class="item-img--ar1">
                <img src={sezancard } alt=""/></div>
                <div class="item-description--ar1">
                  <h5>AUG 2024</h5>
                  <h2>sezane</h2><h3>Chlo Shirt, ecru</h3><h4>5’5-5’6, Size 10</h4>
                  <a >Edit</a>

              </div>
              </div>
          </div>
        </div>


        <div className="user-reviews-box">
          <h2>user’s wishes</h2>
        <div className="green-box">
          <h2>Jenna dress, green/ecru, Size 10</h2>
          <p>AUG 2024</p>
        </div>
        </div>



        <div className="user-reviews-box">
          <h2>user’s listings</h2>
          <div className="user-reviews-card">

            <div class="item1--ar1 hello-buddy" >
              <div class="item-img--ar1">
                <img src={sezancard } alt=""/></div>
                <div class="item-description--ar1">
                  <h5>AUG 2024</h5>
                  <h2>sezane</h2><h3>$150</h3><h3>Chlo Shirt, ecru</h3>
               <h3>NWT, Size 10</h3>
              </div>

              <div className="hero-col">
              <p>Ordered AUG 28, 2024</p>

              <div className="gol-hol-box">
                <h2><span>buyer</span>: Jane doe</h2>
                <h2><span>Address</span>100 Cherry Drive, new York NY 10025 USA</h2>
              </div>
            </div>
            </div>
  
          </div>
        </div>



        <div className="user-reviews-box">
          <h2>user’s orders</h2>
          <div className="user-reviews-card">

            <div class="item1--ar1 hello-buddy" >
              <div class="item-img--ar1">
                <img src={sezancard } alt=""/></div>
                <div class="item-description--ar1">
                  <h5>AUG 2024</h5>
                  <h2>sezane</h2><h3>$150</h3><h3>Chlo Shirt, ecru</h3>
               <h3>NWT, Size 10</h3>
              </div>

              <div className="hero-col">
              <p>Ordered AUG 28, 2024</p>

              <div className="gol-hol-box">
                <h2><span>Tracking</span>: 23423423423432</h2>
          
              </div>
            </div>
            </div>
  
          </div>
        </div>
      </div>

    </>


  )



}

export default UsersA