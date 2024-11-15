import { retry } from "@reduxjs/toolkit/query";
import React, { useEffect } from "react";
import messageicon from "../../assets/Images/Message square.png"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { paginatedReviews } from "../../Redux/Features/addreviewSlice";


const ReviewPagination=()=>{
    const navigate= useNavigate()

   
    const Product_Navigate=(p,brand)=>{

        console.log(p)
    navigate(`/product1/${brand}/${p}`)


}



const dispatch = useDispatch();

// Fetch reviews when the component mounts
useEffect(() => {
  dispatch(paginatedReviews(1)); // Fetch the first page of reviews
}, [dispatch]);

// Select the reviews data from the Redux store
const reviews = useSelector((state) => state.addreview.paginatedReviews);
const currentPage = useSelector((state) => state.addreview.currentPage);
const totalPages = useSelector((state) => state.addreview.totalPages);
const loading = useSelector((state) => state.addreview.loading);
const error = useSelector((state) => state.addreview.error);


console.log("paginated TS",reviews,currentPage)







return (


<>
<section class="section-2">
        <div class="container">
            <div class="main-latest">
                <div class="latest-title">
                    <h2>All Reviews</h2>
                    <Link to='/review-form' style={{textDecoration:'none'}}>
                    
                    <button>
                        + add my review
                    </button>
                    </Link>
                </div>

<div class="latest-boxes">


    <div class="min-latest-card" style={{display:'flex',}}>

            {
                reviews?.map((e,i)=>(



        <div class="latest-card"  onClick={()=>Product_Navigate(e._id,e.brand)} key={i}>
            <div class="latest-card-img">
                <img src={e.pictures[0]} alt="" loading="lazy"/>
            </div>
            <div class="latest-card-title">
                <h2>{e.brand}</h2>
                <h3>{e.productName}</h3>
                <p>{e.height}, {e.size}</p>
    
                <div class="latest-button">
                  <a href=""><span>FRENCH BRANDS, DRESS,</span> {e.height}, {e.size}</a>
                    <button>
                        <img src={messageicon} alt=""/>
                        <p>({e?.commentsCount})</p>
                    </button>
                </div>
            </div>
        </div>

                ))
            }

           



        
        

</div>
 
<div className="next-back-btn-box">
<button
           
           onClick={() => dispatch(paginatedReviews(currentPage + 1))}
            
         >
           Next
            
         </button>

         <button
 onClick={() => {
   if (currentPage > 1) {
     dispatch(paginatedReviews(currentPage - 1));
   }
 }}
 disabled={currentPage === 1}
>
 Previous
</button>
</div>
            </div>
        </div>
        </div>
    </section>

</>




)





}

export default ReviewPagination