import React, { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getsinglelistingproduct } from "../../Redux/Features/addListingSlice";
import Comments from "./Comment";
const MyComponent2 = () => {

  const [show_drawer,setshow_drawer]= useState('wishes')

  const {id}=useParams()
  const dispatch = useDispatch()
  const navigate= useNavigate()

  useEffect(()=>{
    
    dispatch(getsinglelistingproduct(id))
  },[])


  const Product = useSelector((state)=>state.addlisting.singleListingProduct)

  const ProceedCheckOut=(id)=>{

    navigate(`/checkout/${id}`)

  }



  return (

    <section className="prouduct">
      <div className="container">
  <div className="main--ar1">


    <div className="first-col--ar1">
      <div className="container--ar1">
        <div className="content--ar1">
          <div className="heading1--ar1">
            <h1>{Product?.brand}</h1>
            <p>{Product?.productName}, {Product?.color}</p>
            <p style={{ color: "#9A8C98" }}>5'5-5'6, Size {Product?.size}</p>
          </div>

          <p>
           {Product?.offerPrice}
          </p>
     
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
              src= {Product?.pictures[0]}
              alt=""
            />
          </div>
          <div className="second-col-img--ar1">
            <div>
              <img
                src={Product?.pictures[0]}
                alt=""
              />
            </div>
            <div>
              <img
                src={Product?.pictures[1]}
                alt=""
              />
            </div>
            <div>
              <img
                src={Product?.pictures[2]}
                alt=""
              />
            </div>
          </div>
        </div>
        <div style={{ lineHeight: 1.5 }} className="description--ar1">
          <h6>Description</h6>
          <p>
          {Product?.itemDescription}
          </p>
          <p>
            {Product?.additionalDetails}
          </p>
 

          {/* <h5>FRENCH BRANDS, TOPS, BUTTON-DOWN SHIRT, 5’5-5’6, SIZE 4</h5> */}
          <div className="insta--ar1">
            <span>

              <div className="hell-insta">
                <img src={insta} alt="" />
              </div>
              Follow us for brand vs. IRL
              comparisons!
            </span>
          </div>
         

          <button className="btn--ar1" onClick={()=>ProceedCheckOut(Product?._id)}>Purchase</button>

          <Comments product_id={id} />
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
          <p className="add--ar1">+</p>

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

export default MyComponent2;
