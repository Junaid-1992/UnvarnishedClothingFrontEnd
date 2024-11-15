import React, { useEffect } from "react";


import pp1 from "../../assets/Images/Screenshot 2024-08-29 165938.png"
import pp2 from "../../assets/Images/image 59.png"
import pp3 from "../../assets/Images/image 60.png"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SingleOrder } from "../../Redux/Features/addOrderSlice";
import { getsinglelistingproduct } from "../../Redux/Features/addListingSlice";
const SingleOrderDetails=()=>{

  const {id}=useParams()

  console.log(id)

  const dispatch = useDispatch()
  useEffect(()=>{
    
    dispatch(SingleOrder(id))
    dispatch(getsinglelistingproduct(id))
  },[])

  const Product = useSelector((state)=>state.addlisting.singleListingProduct)

  
  const Order = useSelector((state)=>state.addorder.singleOrderDetails)

  const commission=(price)=>{

    const amount= parseInt(price)
    const step1= 0.12 * amount

    const finalresult = amount-step1

    return finalresult


  }

    return (

        <>

<div className="main-ab">
        <div className="main-listing-1 more-shar1">

          <div className="more-shar2">
<div className="gol-kol">
<h1>Order</h1>
<h1>price: ${Product?.offerPrice}</h1>
</div>
          


          

            <div className="hello-shai">
           
              <h2>June 24, 2024, 7:24am eST</h2>
            </div>

          </div>

          <div className="box-shair">
            <div className="uk-old-div-box">
              <div className="uk-old-div">
                <h3>Order history</h3>
                <div className="ul-div">
                  <ul>
                    <li><span>Order date:</span>  Aug 24, 2024 7:01am EST</li>
                    <li><span>Shipping date:</span> Aug 24, 2024 7:01am EST</li>
                    <li><span>Delivery date:</span> Aug 24, 2024 7:01am EST</li>
                    <li><span>Payout:</span>  Aug 24, 2024 7:01am EST</li>
                 
                   
                   
                  </ul>
                </div>
              </div>
              <div className="uk-old-div">
                <h3>Buyer info:</h3>
                <div className="ul-div">
                  <ul>
                  <li><span>Buyer:</span>  {Order?.email}</li>
                    <li><span>Buyer address:</span>  {Order?.addressLine1} {Order?.addressLine2}</li>
                    <li><span>Payment:</span> Paypal</li>
                    <li><span>Tracking:</span> {Order?.trackingId}</li>
                    <li><span>Carrier:</span> FEDEX</li>
                    <li><span>Status:</span> {Order?.trackingStatus}</li>
                  </ul>
                </div>
              </div>


              <div className="uk-old-div">
                <h3>Seller info:</h3>
                <div className="ul-div">
                  <ul>
                  <li><span>Seller email:</span> {Product?.email}</li>
                  <li><span>Payment:</span> Venmo</li>
                  <li><span>Seller address:</span>  {Product?.addressLine1} {Product?.addressLine2}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="uk-new-div-box">
            <h3>Product description</h3>

              {/* <div className="ul-div">
                <ul>
                  <li className="extra-class-li"><span>Description:</span> Very feminine shirt. Worn twice. Runs true to size although the sleeves are a little short. 
                  </li>
            
        
                </ul>
              </div> */}
      <div className="new-old-imger-box">

        {
          Product?.pictures?.map((e,i)=>(

            <div className="new-old-imger" key={i}>
            <img src={e} alt="" />
            </div>

          ))
        }
            
              

              </div>
            
              <div className="ul-div">
                  <ul className="go-pad">
                
                    <li><span>Description:</span>  {Product?.itemDescription}</li>
             
                 
                  </ul>
                </div>

            <div className="uk-old-div">
            <h3>ORDER DETAILS</h3>
                <div className="ul-div">
                  <ul>
                
                    <li><span>order date:</span> July 10, 2024 7:10am</li>
                    <li><span>order #:</span>  1003</li>
                    <li><span>Buyer email:</span>  {Order?.email}</li>
                    <li><span>Tracking:</span> {Order?.payment_details?.id}</li>
                    <li><span>Status:</span> {Order?.trackingStatus}</li>
                    <li><span>Buyer address:</span>  {Order?.addressLine1} {Order?.addressLine2}</li>
              



                  </ul>
                </div>


                
            </div>


            <div className="uk-old-div">
             
                <div className="ul-div">
                  <ul>
                  <li> commission: 12%</li>
                 
                  <li> total payment: ${Product?.offerPrice}</li>
                  <li> total payout to seller: 12% x ${Product?.offerPrice} = ${commission(Product?.offerPrice)}  </li>
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

export default SingleOrderDetails