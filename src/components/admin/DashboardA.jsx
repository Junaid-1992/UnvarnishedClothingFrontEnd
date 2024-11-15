import React, { useEffect, useState } from "react";

import delet from "../../assets/Images/delete 1.png"
import email from "../../assets/Images/email.png"

import heil from "../../assets/Images/heil.png"
import gift from "../../assets/Images/gift.png"
import gift1 from "../../assets/Images/gift1.png"
import gift2 from "../../assets/Images/gift2.png"

import dash from "../../assets/Images/dash.png"
import gift3 from "../../assets/Images/gift3.png"
import gift4 from "../../assets/Images/gift5.png"
import ReviewsA from "./ReviewsA";
import Dashp from "./Dashp";
import Dashz from "./Dashz";
import Dashk from "./Dashk";
import { getallwishes } from "../../Redux/Features/addWishesSlice";
import { useDispatch } from "react-redux";
import { getAllReviews } from "../../Redux/Features/addreviewSlice";
const DashboardA=()=>{

    const [hit,sethit]=useState(true)

    const deleteCallback=(p)=>{

        sethit(!hit)

    }


const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllReviews())
        dispatch(getallwishes())
    },[hit])


    return (

        <>
 <div class="main-2">
 <h1 class="h1-1">Dashboard</h1>


 <div className="hero-box-btn">
    <div className="dashbord-card">
        <div className="dashbord-card-icon">
<img src={gift1} alt="" />
        </div>
        <div className="dashbord-card-tital"> 
            <h2>New Users</h2>
            <h2>130</h2>
        </div>


    </div>



    <div className="dashbord-card">
        <div className="dashbord-card-icon">
        <img src={gift} alt="" />
        </div>
        <div className="dashbord-card-tital"> 
            <h2>New Users</h2>
            <h2>130</h2>
        </div>


    </div>




    <div className="dashbord-card">
        <div className="dashbord-card-icon">
        <img src={gift2} alt="" />
        </div>
        <div className="dashbord-card-tital"> 
            <h2>New Users</h2>
            <h2>130</h2>
        </div>


    </div>




    <div className="dashbord-card">
        <div className="dashbord-card-icon">
        <img src={gift3} alt="" />
        </div>
        <div className="dashbord-card-tital"> 
            <h2>New Users</h2>
            <h2>130</h2>
        </div>


    </div>


    <div className="dashbord-card">
        <div className="dashbord-card-icon">
        <img src={gift4} alt="" />
        </div>
        <div className="dashbord-card-tital"> 
            <h2>New Users</h2>
            <h2>130</h2>
        </div>


    </div>
 </div>

 <div className="rout-call-box-22">
    <div className="gol-11">
        <Dashk/>
    </div>

    <div className="gol-11">
<Dashz/>
    </div>
 </div>

 <div className="rout-call-box">
    <Dashp fetch={deleteCallback}/>
 </div>
        </div>
     
        
        </>


    )



}

export default DashboardA