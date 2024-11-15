 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainSection from '../components/Signup/MainSection';
import Login from '../pages/Login';
import MyAccount from '../components/Sidebar/MyAccount';
import Reviews from '../components/Sidebar/Reviews';
import MyOrders from '../components/Sidebar/MyOrders';
import MyListing from '../components/Sidebar/MyListings';
import MyWishes from '../components/Sidebar/MyWishes';
import Admin1 from '../components/admin/Admin1';
import ListingsA from '../components/admin/ListingsA';
import OrdersA from '../components/admin/OrdersA';
import ReviewsA from '../components/admin/ReviewsA';
import UsersA from '../components/admin/usersA';
import Wishes from '../components/admin/Wishes';
import DashboardA from '../components/admin/DashboardA';
import Nofi2 from '../components/admin/Nofi2';
import Nofi3 from '../components/admin/SingleReviewDetailsAdmin';
import SingleProductListing from '../components/admin/SingleProductListing';
import SingleOrderDetails from '../components/admin/SingleOrderDetails';
import SingleReviewDetailsAdmin from '../components/admin/SingleReviewDetailsAdmin';
 

const   AdminRoutes = () => {

  
  return (
    <Routes>
      <Route path="" element={<DashboardA />} />

      <Route path="admin-Users" element={<UsersA />} />
    
      <Route path="admin-Reviews" element={<ReviewsA />} />

      <Route path="admin-wishes" element={<Wishes />} />

      <Route path="admin-Listings" element={<ListingsA />} />
    
      <Route path="admin-Orders" element={<OrdersA />} />


      <Route path="admin-Listings/admin-single-product-listing/:id" element={<SingleProductListing />} />

      <Route path="admin-orders/admin-single-order-details/:id" element={<SingleOrderDetails />} />


      <Route path="admin-reviews/admin-single-review-details/:id" element={<SingleReviewDetailsAdmin />} />

      <Route path="admindashboard/admin-single-review-details/:id" element={<SingleReviewDetailsAdmin />} />
      
    </Routes>
  );


};

export default AdminRoutes;
