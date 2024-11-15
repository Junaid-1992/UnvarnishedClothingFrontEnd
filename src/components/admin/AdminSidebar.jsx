import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconavatar from "../../assets/Images/dashgg.png"
import iconphone from "../../assets/Images/Smartphone.png"
import iconHeart from "../../assets/Images/Heart.png"
import iconCart from "../../assets/Images/iconcart.png"
import iconBox from "../../assets/Images/icon (1).png"

const SidebarContainer = styled.div`
  width: 250px;
  
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const SidebarItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #444;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;

const AdminSidebar = () => {


  const [isOpen, setIsOpen] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(window.innerWidth <= 600);
      
      if(window.innerWidth <= 600)
      {

        setIsOpen(false)
      }
      else{
        setIsOpen(true)
      }
      
    };

    handleResize();  
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  const [index,setindex]=useState(0)

  const handleChangeIndex = (p)=>{
 
   if(window.innerWidth <= 600){
 
 
     setindex(p)
     setIsOpen(!isOpen);
 
   }
   else{
     setindex(p)
   }
 
 
  }

  return (
    <>
    {
      showButton &&
<div className="ahti"  style={{position:"fixed",top:'0'}}>
{/* <input class="label-check" id="label-check" type="checkbox"  onClick={()=>{toggleSidebar()}}/>
    <label for="label-check" class="hamburger-label">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    <label></label></label> */}
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none" onClick={()=>{toggleSidebar()}}>
  <rect width="29" height="4" rx="2" fill="black" fill-opacity="0.7"/>
  <rect y="12" width="29" height="4" rx="2" fill="black" fill-opacity="0.7"/>
  <rect x="8" y="6" width="21" height="4" rx="2" fill="black" fill-opacity="0.7"/>
</svg>
</div>
    }



   
    <div className="side-bar-container-thiviyo" style={{  display: isOpen? "block":'none'}}>
    <div className="fix-side-box">
      <Link to='' className="none-list" style={{backgroundColor: index===0?'#F3F6FF':'transparent' , borderRight: index===0? '4px solid #2947C7':'none'}} onClick={()=>handleChangeIndex(0)}>

      <div className="side-bar-item-child"><div className="side-nav-pic"><img className="img-icon-bar"  src={iconavatar} alt="" /></div>Dashboard</div>
      </Link>


    {/* <Link className="none-list" to="admin-Users" style={{backgroundColor: index===1?'#F3F6FF':'transparent' , borderRight: index===1? '4px solid #2947C7':'none'}} onClick={()=>handleChangeIndex(1)}>  
    
      <div className="side-bar-item-child"><div className="side-nav-pic"><img className="img-icon-bar" src={iconphone} alt="" /></div>Users</div>
    
    </Link> */}

<Link className="none-list" to='admin-reviews' style={{backgroundColor: index===2?'#F3F6FF':'transparent' , borderRight: index===2? '4px solid #2947C7':'none'}} onClick={()=>handleChangeIndex(2)}>

      <div className="side-bar-item-child"><div className="side-nav-pic"><img className="img-icon-bar" src={iconHeart} alt="" /></div>Reviews</div>

</Link>
<Link className="none-list" to='admin-wishes' style={{backgroundColor: index===3?'#F3F6FF':'transparent' , borderRight: index===3? '4px solid #2947C7':'none'}} onClick={()=>handleChangeIndex(3)}>

      <div className="side-bar-item-child"><div className="side-nav-pic"><img className="img-icon-bar" src={iconCart} alt="" /></div>Wishes</div>

</Link>


<Link className="none-list" to='admin-Listings' style={{backgroundColor: index===4?'#F3F6FF':'transparent' , borderRight: index===4? '4px solid #2947C7':'none'}} onClick={()=>handleChangeIndex(4)}>

      <div className="side-bar-item-child"><div className="side-nav-pic"><img className="img-icon-bar" src={iconBox} alt="" /></div>Listings</div>

</Link>

<Link className="none-list" to='admin-orders' style={{backgroundColor: index===5?'#F3F6FF':'transparent' , borderRight: index===5? '4px solid #2947C7':'none'}} onClick={()=>handleChangeIndex(5)}>

      <div className="side-bar-item-child"><div className="side-nav-pic"><img className="img-icon-bar" src={iconBox} alt="" /></div>Orders</div>

</Link>
</div>
    </div>
    </>
  );
};

export default AdminSidebar;
