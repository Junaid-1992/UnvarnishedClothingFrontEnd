import React, { useEffect } from "react";
import iconBox from "../../assets/Images/sezancard.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ordersbyEmail } from "../../Redux/Features/addOrderSlice";
const MyOrders=()=>{


    const navigate = useNavigate()
    const handleNavigate=(orderID)=>{
  
      console.log("Hit",orderID)
  
      navigate(`single-order-details/${orderID}`)
  
    }
  

    const dispatch = useDispatch()

    const email= localStorage.getItem("User_Data")
    console.log(email,"session")
 
    useEffect(()=>{
    
      dispatch(ordersbyEmail(email))
    
    },[])

    const Orders= useSelector((state)=>state.addorder.emailOrders)


    return (

        <>
          {/* <section class="sec1"> */}
      <div class="main-1">
        <div class="p-h1">
        <h1 class="h1-1">My Orders</h1>
      </div>
        <div class="main-box">

          {

              Orders?.map((e,i)=>(

                <div class="Card" onClick={()=>handleNavigate(e?.productDetails?._id)} key={i}>
                <div class="card-sec-1">
                  <div class="card-img-body">
                      <img src={e?.productDetails?.pictures[0]} alt="" />
                  </div>
                  <div class="car-cont">
                    
                      <div class="card-upper-content" >
                          <h2 class="card-title">{e?.productDetails?.brand}</h2>
                          <p class="Card-date">Aug 2024</p>
                        </div>
                        <div class="card-lower-content">
                            <p class="card-prize">${e?.productDetails?.offerPrice}</p>
                            <p class="card-name">{e?.productDetails?.productName}, {e?.productDetails?.color}, Size {e?.productDetails?.size}</p>
                        </div>
                        <p class="card-val">Ordered AUG 28, 2024</p>
                    </div>
                </div>
                <div class="card-sec-2">
                    
                    <p class="bolder">Tracking:<span class="lighter">{e?.trackingId}</span></p>
                  
                    <p class="bolder">Tracking Status:<span class="lighter">{e?.trackingStatus}</span></p>
                    <p class="bolder">ship from:<span class="lighter"> {e?.productDetails?.addressLine1}</span></p>
      
                    <p class="bolder">Delivery Address:<span class="lighter">  </span></p>
                    <p class="bolder"> Address Line 1:<span class="lighter"> {e?.addressLine1}</span></p>
                    <p class="bolder">Address Line 2:<span class="lighter"> {e?.addressLine2}</span></p>
                  </div>
            </div>


              ))


          }

       

 

        </div>
      </div>
    {/* </section> */}
        
        </>


    )



}


export default MyOrders