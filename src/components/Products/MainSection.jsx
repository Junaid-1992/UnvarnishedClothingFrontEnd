import React, { useState } from "react";
import insta from "../../assets/Images/insta.png"
import girl_big from '../../assets/Images/productgirlbig.png'
import girl1 from '../../assets/Images/image51.png'
import girl2 from '../../assets/Images/image52.png'
import girl3 from '../../assets/Images/image53.png'

import hey from "../../assets/Images/sezancard.png"

import hey2 from "../../assets/Images/sen2.png"

import err from "../../assets/Images/error.png"
import Wishes_Drawer from "./Wishes_Drawer";
import Listing_Drawer from "./Listing_Drawer";
const MyComponent = () => {

  const [show_drawer,setshow_drawer]= useState('wishes')

  return (

    <section className="prouduct">
      <div className="container">
  <div className="main--ar1">


    <div className="first-col--ar1">
      <div className="container--ar1">
        <div className="content--ar1">
          <div className="heading1--ar1">
            <h1>Sezane</h1>
            <p>Chlo Shirt, Blue Powder</p>
            <p style={{ color: "#9A8C98" }}>5'5-5'6, Size 10</p>
          </div>
     
        </div>
        <div className="image-div--ar1">
          <div className="first-col-img--ar1">
            <img
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
              }}
              src= {girl_big}
              alt=""
            />
          </div>
          <div className="second-col-img--ar1">
            <div>
              <img
                src={girl1}
                alt=""
              />
            </div>
            <div>
              <img
                src={girl2}
                alt=""
              />
            </div>
            <div>
              <img
                src={girl3}
                alt=""
              />
            </div>
          </div>
        </div>
        <div style={{ lineHeight: 1.5 }} className="description--ar1">
          <h6>User Thoughts</h6>
          <p>
          So interestingly, I bought this shirt in Ecru a few weeks ago and I was really disappointed because it was completely see-through and utterly unwearable. I sent it back and forgot about it. Then I read a couple of reviews for the same shirt but in different colors and it was clear that this should be every working woman’s staple blouse!
          </p>

          <p>I got my usual size 4 and I LOVE IT. I would wear this with a pencil skirt as well as jeans for a more dressed down look. I love the little details – the fabric-covered buttons, the ruffle drape detail, and also the slightly balloon sleeves which I think look super girly.</p>

          <p>The one thing to note is that the blouse itself is opaque but I did notice that deodorant stains happen pretty easily. I’m going to try a spray deodorant to see if that helps.</p>
          <p>Love this shirt. I’m 5’6, 135lbs.</p>

          <h5>FRENCH BRANDS, TOPS, BUTTON-DOWN SHIRT, 5’5-5’6, SIZE 4</h5>
          <div className="insta--ar1">
            <span>

              <div className="hell-insta">
                <img src={insta} alt="" />
              </div>
              Follow us for brand vs. IRL
              comparisons!
            </span>
          </div>
         
          <div className="Comments-pp">
            <h2>Comments</h2>
            <p >gINA (aUG 2024)</p>
            <div className="questioning--ar1">
              
              <div className="hfcgf">
                <p className="err-box"> <div className="errr-pic"><img src={err} alt="" /></div>WOW, I LOVE THIS TOP!</p>
                <p>JUSTINE (aUG 2024)</p>
               <p className="err-box"> <div className="errr-pic"><img src={err} alt="" /></div>THIS LOOKS SO MUCH BETTER irl than it does in the product pic!</p>
              </div>
            </div>
            <div className="input--ar1">
              <div className="input-div--ar1">
                <input type="text" placeholder="add your thoughts..." />
              </div>
              <div className="input-div--ar1">
                <input type="text" placeholder="name/username/alias" />
                <input type="email" placeholder="email" />
              </div>
              <button className="btn--ar1">Submit</button>
            </div>
            <div className="reviews--ar1">
              <p>Reviews Of The Same Item</p>
            </div>
            <div className="item--ar1">
              <div className="item1--ar1">
                <div className="item-img--ar1">
                 <img src={hey} alt="" />
                </div>
                <div className="item-description--ar1">
                   <h2>sezane</h2>

                  <h3>Chlo Shirt, ecru</h3>
                  <h4>5’5-5’6, Size 10</h4>
                 
                </div>
              </div>
              <div className="item1--ar1">
                <div className="item-img--ar1">
                 <img src={hey2} alt="" />
                </div>
                <div className="item-description--ar1">
                   <h2>sezane</h2>

                  <h3>Chlo Shirt, ecru</h3>
                  <h4>5’5-5’6, Size 10</h4>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

{/* 
    <div className="second-col--ar1">

    <p className="heading--ar1">The Exchange</p>
      <div className="cart--ar1">
        <div className="list--ar1">
          <p>Wishes</p>
          <p className="active--ar1">Listing</p>
        </div>
        <div className="border--ar1"></div>

        <div className="cart-products--ar1">
          <p className="brand--ar1">Brand : Sezane</p>
          <p className="add--ar1">+Add My Listing</p>

          <div className="products--ar1">
            
         <h3>Jenna dress, green/ecru, Size 10</h3>
         <h3>Colette Mariniere, Blue/ecru, size 4</h3>

         <h3>Paula babies, Patent Purple, Shoe size 7.5</h3>
          </div>
        </div>
      </div>


    </div> */}

<div className="second-col--ar1">

<p className="heading--ar1">The Exchange</p>
  <div className="cart--ar1">
    <div className="list--ar1">
      <p   className= {show_drawer==="wishes"?"active--ar1":''}  onClick={()=>setshow_drawer("wishes")}>Wishes</p>
      <p className={show_drawer==="listing"?"active--ar1":''} onClick={()=>setshow_drawer("listing")}>Listing</p>
    </div>
    <div className="border--ar1"   ></div>

          {
            show_drawer==="wishes" ? (<Wishes_Drawer/>):(<Listing_Drawer/>)
          }
    
  </div>


</div>
  </div>
      </div>
    </section>


  
  );
};

export default MyComponent;
