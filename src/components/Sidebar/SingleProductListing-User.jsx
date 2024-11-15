import React, { useEffect } from "react";


import pp1 from "../../assets/Images/Screenshot 2024-08-29 165938.png"
import pp2 from "../../assets/Images/image 59.png"
import pp3 from "../../assets/Images/image 60.png"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SingleOrder } from "../../Redux/Features/addOrderSlice";
import { getsinglelistingproduct } from "../../Redux/Features/addListingSlice";
const SingleProductListingUser=()=>{

    
  const {id}=useParams()

  console.log(id)

  const dispatch = useDispatch()
  useEffect(()=>{
    
    dispatch(SingleOrder(id))
    dispatch(getsinglelistingproduct(id))
  },[])

  const Product = useSelector((state)=>state.addlisting.singleListingProduct)

  
  const Order = useSelector((state)=>state.addorder.singleOrderDetails)



    return (

        <>

<div className="main-ab">
        <div className="main-listing-1 more-shar1">

          <div className="more-shar2">

            <h1>My Listing: Listing # 1001</h1>



            <div className="hello-shai">
              {/* <h1>EDIT | MAKE INACTIVE</h1> */}
              <h2>August 7, 2024 7:05AM</h2>
            </div>

          </div>

          <div className="box-shair">
            <div className="uk-old-div-box">
              <div className="uk-old-div">
                <h3>PRODUCT DETAILS</h3>
                <div className="ul-div">
                  <ul>
                    <li><span>Brand:</span>  {Product?.brand}</li>
                    <li><span>Product:</span> {Product?.productName}</li>
                    <li><span>Color:</span> {Product?.color}</li>
                    <li><span>Size:</span>  {Product?.size}</li>
                    <li><span>Condition:</span>{Product?.itemDescription}</li>
                    <li><span>Price:</span> ${Product?.offerPrice}</li>
                   
                  </ul>
                </div>
              </div>
              <div className="uk-old-div">
                <h3>MY DETAILS</h3>
                <div className="ul-div">
                  <ul>
                  <li><span>Email:</span> {Product?.email}</li>
                    <li><span>payment method:</span>  Paypal</li>
                
                    <li><span>Delivery address:</span> </li>

                    <li><span> Address Line 1:</span>{Product?.addressLine1} </li>

                    <li><span> Address Line 2:</span>{Product?.addressLine2}  </li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="uk-new-div-box">
            <h3>SALE DETAILS</h3>

              {/* <div className="ul-div">
                <ul>
                  <li className="extra-class-li"><span>Description:</span> Very feminine shirt. Worn twice. Runs true to size although the sleeves are a little short. 
                  </li>
            
        
                </ul>
              </div> */}
      <div className="new-old-imger-box">

        {
          Product?.pictures.map((e,i)=>(

            <div className="new-old-imger" key={i}>
            <img src={e} alt="" />
            </div>

          ))
        }
              

             
              

              </div>
            

            <div className="uk-old-div">
          
                <div className="ul-div">
                  <ul>
                
                    <li><span>Tracking:</span> {Order?.trackingId}</li>
                    <li><span>Carrier:</span>  USPS</li>
                    <li><span>payment method:</span>  Paypal</li>
                    <li><span>Payout:</span>  $135</li>
                    <li><span>Status:</span> {Product?.status}</li>
                    <li><span>Delivery Address:</span>  </li>
                    <li><span>Address Line 1:</span> {Order?.addressLine1} </li>

                    <li><span> Address Line 2:</span> {Order?.addressLine2}  </li>



                  </ul>
                </div>
            </div>
            </div>
          </div>

        </div>
      </div>

        
        </>


    )



}

export default SingleProductListingUser