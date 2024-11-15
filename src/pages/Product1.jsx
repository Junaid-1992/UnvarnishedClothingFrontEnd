import React, { Suspense } from "react";
import Header from "../mocks/Header";
import Footer from "../mocks/Footer";

import MyComponent1 from "../components/Products/MainSection1";
import AddMyListings from "../components/Popups/AddMyListing";

const Product1 = ()=>{


    return(
        <>
      

        <Header/>
        <MyComponent1/>
        <Footer/>

         
      
        </>



    )



}


export default Product1