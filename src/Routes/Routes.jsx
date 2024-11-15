import React from "react";
import { useRoutes } from "react-router-dom";
import App from "../App";
import LandingPage from "../pages/LandingPage";
import ReviewForm from "../pages/ReviewForm";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Checkout from "../pages/Checkout";
import Product from "../pages/Product";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import AddMyWish from "../components/Popups/AddMyWish";
import AddMyListings from "../components/Popups/AddMyListing";
import Product1 from "../pages/Product1";
 
import Reset from "../pages/Reset";
import Admin1 from "../components/admin/Admin1";
import Wishes from "../components/admin/Wishes";

import ListingsA from "../components/admin/ListingsA";
import ReviewsA from "../components/admin/ReviewsA";
import OrdersA from "../components/admin/OrdersA";
import UsersA from "../components/admin/usersA";
import AdminDashboard from "../pages/AdminDashboard";
import DashboardA from "../components/admin/DashboardA";
import SingleBrandReviews from "../pages/SingleBrandReviews";
import AllReviews from "../pages/AllReviews";
import SearchResults from "../pages/SearchResults";
import Paypal from "../Paypal/Paypal";
import SellProduct from "../pages/SellProduct";
import SearchTags from "../pages/SearchTags";


 
const Routes = () => {
  return useRoutes([
    {
      path: "/",element: <LandingPage />,
      // children: [
      //   {
      //     path: "/",
      //     element: <div>App</div>,
      //   },
      // ],
    },


    {
      path: "/review-form",element: <ReviewForm />
      
    },

    {
      path: "/about",element: <About />
      
    },


    {
      path: "/dashboard/*",element: <Dashboard />
      
    }, 
    
    
    
    {
      path: "/allreviews",element: <AllReviews />
      
    },  

     
    {
      path: "/searchresults",element: <SearchResults />
      
    },   


    {
      path: "/tagresults",element: <SearchTags />
      
    },   
 
 


    {
      path: "/checkout/:id",element: <Checkout />
      
    },  



    {
      path: "/product",element: <Product />
      
    },  


    
    {
      path: "/product1/:brandname/:id",element: <Product1 />
      
    },  


    
    {
      path: "/sellproduct/:id",element: <SellProduct />
      
    },  

    

    {
      path: "/signup",element: <Signup />
      
    },  


    {
      path: "/singlebrandreviews/:brandname",element: <SingleBrandReviews />
      
    }, 
    
    
    
    {
      path: "/paypal",element: <Paypal />
      
    }, 


    
     

    {
      path: "/reset",element: <Reset />
      
    },  


    {
      path: "/AddMyListings",element: <AddMyListings />
      
    },  


    {
      path: "/login",element: <Login />
      
    }, 


    {
      path: "/resetpassword",element: <ResetPassword />
      
    }, 

    {
      path: "/AddMyWish",element: <AddMyWish />
      
    }, 

    {
      path: "/AddMyListings",element: <AddMyListings />
      
    }, 

// hello-my-Routes-hello-my-Routes-hello-my-Routes
// hello-my-Routes-hello-my-Routes-hello-my-Routes
// hello-my-Routes-hello-my-Routes-hello-my-Routes
// hello-my-Routes-hello-my-Routes-hello-my-Routes


    {
      path: "/Admin1",element: <Admin1 />
      
    }, 


    {
      path: "/Wishes",element: <Wishes />
      
    }, 



    {
      path: "/ListingsA",element: <ListingsA />
      
    }, 

    {
      path: "/ReviewsA",element: <ReviewsA />
      
    }, 
   

    {
      path: "/OrdersA",element: <OrdersA />
      
    }, 


    {
      path: "/UsersA",element: <UsersA />
      
    }, 


    
    {
      path: "/admindashboard/*",element: <AdminDashboard />
      
    }, 


     
    {
      path: "/DashboardA/*",element: <DashboardA />
      
    }, 

// hello-my-Routes-hello-my-Routes-hello-my-Routes
// hello-my-Routes-hello-my-Routes-hello-my-Routes
// hello-my-Routes-hello-my-Routes-hello-my-Routes
// hello-my-Routes-hello-my-Routes-hello-my-Routes

  ]);
};

export default Routes;
