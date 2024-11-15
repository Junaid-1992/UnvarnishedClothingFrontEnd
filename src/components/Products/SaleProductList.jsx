import React from "react";
import girl1 from '../../assets/Images/image51.png'
import girl2 from '../../assets/Images/image52.png'
import girl3 from '../../assets/Images/image53.png'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getsinglelistingproduct } from "../../Redux/Features/addListingSlice";

const SaleProductsListing=()=>{

    const ListingProducts= useSelector((state)=>state.addlisting.BrandListings)


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Product_Navigate=(id)=>{

      console.log(id,"POP ID")
      navigate(`/sellproduct/${id}`)

    }


    return(

        <>
           <div className="products--ar1">
            
            {
                ListingProducts?.map((e,i)=>(


            <div className="product--ar1" onClick={()=>Product_Navigate(e._id)}>
              <div className="logo-hide-img"> 
                <img
                  src={e.pictures[0]}
                  alt=""
                />
              </div>
              <div>
                <div className="show-me-a-button" >
                  <p>{e?.offerPrice}</p>
                  <p>{e?.productName}</p>
                  <p>{e?.size}</p>


                 
                </div>
                <a href="#">See More</a>
              </div>
            </div>

                ))
            }
             
            {/* <div className="product--ar1">
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
            </div> */}
          </div>
        </>


    )



}

export default SaleProductsListing