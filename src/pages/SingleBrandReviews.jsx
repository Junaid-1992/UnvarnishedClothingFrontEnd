
import React, { useEffect, useState } from "react";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import Reviews from "../components/BrandReviews/Review";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBrandReviews } from "../Redux/Features/addreviewSlice";

const SingleBrandReviews= ()=>{

    const {brandname} = useParams()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        const fetchData = async () => {
            setLoading(true); // Start loading
            await  dispatch(getSingleBrandReviews(brandname))
           
            setLoading(false);  
          };
      
          fetchData();
           
    },[])

    const AllSingleBrandReviews= useSelector((state)=>state.addreview.getSingleBrandReviews)
    console.log(AllSingleBrandReviews)

    if (loading) {
        return  <div className="loader-main" style={{height:'100vh'}} >      <div class="loader">
        <span>&lt;</span>
        <span>LOADING</span>
        <span>/&gt;</span>
      </div></div>; // You can replace this with any loader/spinner
      }

    return(

        <>
        <Header/>
        <Reviews  Brands={AllSingleBrandReviews} brandname={brandname}/>
        <Footer/>
        
        
        </>




    )





}


export default SingleBrandReviews