import React, { useEffect } from "react";
import img1 from "../../assets/Images/Frame 95.png"
import img2 from "../../assets/Images/Frame 184.png"
import img3 from "../../assets/Images/Pippa 1.png"
import img4 from "../../assets/Images/Frame 182.png"  
import img5 from "../../assets/Images/Aritzia1 1.png"  
import img6 from "../../assets/Images/Frame.png"
import img7 from "../../assets/Images/IMG_6275 1 (1).png"
import img8 from "../../assets/Images/IMG_6008 2 1.png"
import img9 from "../../assets/Images/image 37.png"
import img10 from "../../assets/Images/Frame 1840.png"
import img11 from "../../assets/Images/Frame 0184.png" 
import img12 from "../../assets/Images/Frame 127.png" 
import img13 from "../../assets/Images/joas 1.png" 
import img14 from "../../assets/Images/IMG_6323 1.png" 
import img15 from "../../assets/Images/Louella 2.png" 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../Redux/Features/addreviewSlice";

const  BrandReviews=()=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const Product_Navigate=(e)=>{
        console.log("TS")
       navigate(`/singlebrandreviews/${e}`)


    }

    useEffect(()=>{
            dispatch(getAllBrands())
    },[])


    const Brands= useSelector((state)=>state.addreview.getAllBrands)

    console.log(Brands,"BRANDS DATA")



return (

<>

<section class="section-3">
        <div class="container">
            <div class="main-reviews by brand">
                <div class="reviews-by-brand-title">
                    <h2>Reviews By Brand</h2>
                </div>
                <div class="reviews-small-card">

                    {
                        Brands?.map((e,i)=>(


                    <div class="s-card-1" onClick={()=>Product_Navigate(e.brand)} key={i}>
                        <div class="small-img">
                            <img src={e.pictures[0]} alt="" loading="lazy"/>
                        </div>
                        <p>{e?.brand} ({e?.reviewCount})</p>
                        
                    </div>



                        ))


                    }


                



                </div>
            </div>
        </div>
    </section>


</>


)



}


export default BrandReviews;




