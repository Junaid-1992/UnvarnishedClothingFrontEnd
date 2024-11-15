import React, { Suspense, useEffect, useState } from "react";
// import Header from "../mocks/Header";
// import Footer from "../mocks/Footer";

// import MainSection from "../components/Landing/main-section";
// import LatestReviews from "../components/Landing/Latest-Reviews";
// import BrandReviews from "../components/Landing/Brand-Reviews";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../Redux/Features/UserDetailSlice";
import { Popup } from "../components/Popups/TestPopup";


const Header = React.lazy(()=>import('../mocks/Header'))
const Footer= React.lazy(()=>import('../mocks/Footer'))
const MainSection= React.lazy(()=>import ('../components/Landing/main-section'))
const LatestReviews= React.lazy(()=>import('../components/Landing/Latest-Reviews'))
const BrandReviews= React.lazy(()=>import('../components/Landing/Brand-Reviews'))
 
const LandingPage = () => {

  const dispatch = useDispatch();
  const { loading: userLoading, users, error: userError } = useSelector((state) => state.userDetail);


useEffect(()=>{
 
},[])


const [isPopupOpen, setIsPopupOpen] = useState(false);

const openPopup = () => setIsPopupOpen(true);
const closePopup = () => setIsPopupOpen(false);

  return (
    <>
    <Suspense fallback={ <div className="loader-main"  >     
       <div class="loader">
    <span>&lt;</span>
    <span>LOADING</span>
    <span>/&gt;</span>
  </div></div>}>
      <Header />
      <MainSection/>
      <LatestReviews/>
      <BrandReviews/>
      <Footer />
      </Suspense>


       
    </>
  );
};

export default React.memo(LandingPage);
