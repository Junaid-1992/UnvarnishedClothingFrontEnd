import { retry } from "@reduxjs/toolkit/query";
import React from "react";
import messageicon from "../../assets/Images/Message square.png"
import { Link, useNavigate } from "react-router-dom";


const Reviews=({Brands,brandname})=>{
    const navigate= useNavigate()
   
    const Product_Navigate=(p,brand)=>{

        console.log(p)
    navigate(`/product1/${brand}/${p}`)


}
return (


<>
<section class="section-2">
        <div class="container">
            <div class="main-latest">
                <div class="latest-title">
                    <h2>{brandname?brandname:'' } Reviews</h2>
                    <Link to='/review-form' style={{textDecoration:'none'}}>
                    
                    <button>
                        + add my review
                    </button>
                    </Link>
                </div>

<div class="latest-boxes">


    <div class="min-latest-card" style={{display:'flex',flexDirection:'row'}}>

            {
                Brands?.map((e,i)=>(



        <div class="latest-card" onClick={()=>Product_Navigate(e._id,e.brand)} key={i}>
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
                        <p>(3)</p>
                    </button>
                </div>
            </div>
        </div>

                ))
            }


                {
                    brandname==="All" && <>

                        <div>
                            <button>
                                TS
                            </button>
                        </div>
                    
                    </>
                }
        

</div>
 
            </div>
        </div>
        </div>
    </section>

</>




)





}

export default Reviews