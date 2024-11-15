 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainSection from '../components/Signup/MainSection';
import Login from '../pages/Login';
import MyAccount from '../components/Sidebar/MyAccount';
import Reviews from '../components/Sidebar/Reviews';
import MyOrders from '../components/Sidebar/MyOrders';
import MyListing from '../components/Sidebar/MyListings';
import MyWishes from '../components/Sidebar/MyWishes';
import SingleOrderDetailsUser from '../components/Sidebar/SingleOrderDetails-User';
import SingleProductListingUser from '../components/Sidebar/SingleProductListing-User';
import SingleReviewDetails from '../components/Sidebar/SingleReviewUserDetail';
 

const   DashboardRoutes = () => {

  
  return (

    // ts
    <Routes>
      <Route path="" element={<MyAccount />} />

      <Route path="review" element={<Reviews />} />

      <Route path="review/single-review-details/:id" element={<SingleReviewDetails/>} />


      <Route path="order" element={<MyOrders />} />

      <Route path="wishes" element={<MyWishes />} />
      <Route path="listing" element={<MyListing />} />
    
      <Route path="listing/single-listing-details/:id" element={<SingleProductListingUser />} />

      <Route path="order/single-order-details/:id" element={<SingleOrderDetailsUser />} />
      
    </Routes>
  );


};

export default DashboardRoutes;
