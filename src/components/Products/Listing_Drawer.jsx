import React, { useState } from "react";
import AddMyListings from "../Popups/AddMyListing";
import girl1 from '../../assets/Images/image51.png'
import girl2 from '../../assets/Images/image52.png'
import girl3 from '../../assets/Images/image53.png'
import { useSelector } from "react-redux";
import SaleProductsListing from "./SaleProductList";

const Listing_Drawer=()=>{

  const [show,setshow]=useState(false)
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => 
    {
      console.log("hit")
      setIsPopupOpen(true);
  
    }
  const closePopup = () => setIsPopupOpen(false);

  const review= useSelector((state)=>state.addreview.singleReview)
    return (


        <>
        
        <div className="cart-products--ar1">
          <p className="brand--ar1">Brand : {review?.brand}</p>
          <p className="add--ar1" onClick={()=>openPopup()}>+Add My Listing</p>

          {/* <div className="products--ar1">
            
            <div className="product--ar1">
              <div>
                <img
                  src={girl1}
                  alt=""
                />
              </div>
              <div>
                <div style={{ paddingBottom: "50px" }}>
                  <p>$150</p>
                  <p>Dora Dress, Blue/Ecru floral</p>
                  <p>NWT, Size 10</p>
                </div>
                <a href="#">See More</a>
              </div>
            </div>
             
            <div className="product--ar1">
              <div>
                <img
                  src={girl2}
                  alt=""
                />
              </div>
              <div>
                <div style={{ paddingBottom: "50px" }}>
                  <p>$150</p>
                  <p>Dora Dress, Blue/Ecru floral</p>
                  <p>NWT, Size 10</p>
                </div>
                <a href="#">See More</a>
              </div>
            </div>
          </div> */}
        </div>


 
  <AddMyListings isOpen={isPopupOpen} onClose={closePopup} brand={review?.brand} />
 
  <SaleProductsListing />

        </>



    )





}


export default Listing_Drawer