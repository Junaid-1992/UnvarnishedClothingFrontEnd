
import React, { useEffect } from "react";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";
import Reviews from "../components/BrandReviews/Review";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getreviews, getSingleBrandReviews, paginatedReviews } from "../Redux/Features/addreviewSlice";
import ReviewPagination from "../components/BrandReviews/ReviewPagination";
import SearchReviewsResults from "../components/BrandReviews/SearchReviews";
import TagsReview from "../components/BrandReviews/TagsReview";

const SearchTags= ()=>{

    
 
    return(

        <>
        <Header/>
      <TagsReview/>
        <Footer/>
        
        
        </>




    )





}


export default SearchTags