import React, { useEffect } from "react";
import iconBox from "../../assets/Images/sezancard.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getuserlistings } from "../../Redux/Features/addListingSlice";
const MyListing=()=>{

  const navigate = useNavigate()
  const handleNavigate=(id)=>{

    console.log("Hit")

    navigate(`single-listing-details/${id}`)

  }


  const dispatch = useDispatch()

  const email= localStorage.getItem("User_Data")
  console.log(email,"session")
  const Listings= useSelector((state)=>state.addlisting.userListings)
  useEffect(()=>{
  
    dispatch(getuserlistings(email))
  
  },[])


  console.log(Listings,"POPOLO")



    return (

        <>
          {/* <section class="sec1"> */}

      <div class="main-1">
        <div class="p-h1">
        <h1 class="h1-1">My Listing</h1>
      </div>
        <div class="main-box">

              {
                Listings?.map((e,i)=>(



          <div class="Card" onClick={()=>handleNavigate(e._id)} key={i}>
            <div class="card-sec-1">
              <div class="card-img-body">
                  <img src={e?.pictures[0]} alt="" />
              </div>
              <div class="car-cont">
                
                  <div class="card-upper-content">
                      <h2 class="card-title">{e?.brand}</h2>
                      <p class="Card-date">Aug 2024</p>
                    </div>
                    <div class="card-lower-content">
                        <p class="card-prize">{e?.offerPrice}</p>
                        <p class="card-name">{e?.productName}, size: {e?.size}</p>
                    </div>
                    <p class="card-val">Ordered AUG 28, 2024</p>
                </div>
            </div>
            <div class="card-sec-2">
       
                <p class="bolder">Listing # :<span class="lighter"> 1001</span></p>
                <p class="bolder">buyer :<span class="lighter">{e?.orders?.email}</span></p>

                <p class="bolder">Address :<span class="lighter">  </span></p>
                  
                <p class="bolder">Address Line 1 :<span class="lighter"> {e?.orders?.addressLine1} </span></p>  
                  
                <p class="bolder">Address Line 2:<span class="lighter"> {e?.orders?.addressLine2} </span></p>
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


export default MyListing