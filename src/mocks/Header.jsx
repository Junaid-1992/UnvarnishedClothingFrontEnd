import React, { useState } from "react";
import Container from "../components/Container";
import logo from "../assets/logo/logo.png";
import icon from "../assets/Images/icon (2).png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchresults } from "../Redux/Features/addreviewSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [prompt,setprompt]=useState("")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dispatch = useDispatch()
  const navigate= useNavigate()

  const handleSearch=()=>{

    if(prompt!="")
    {
      const formData={
        prompt:prompt
      }

      const resultAction = dispatch(searchresults(formData))

      if(resultAction)
      {
        navigate('/searchresults')
      }

    }


  }



  return (    
    <header>
      <div className="container"  >
        <nav>
          <div className="header-logo">
            <Link to='/' style={{ textDecoration:'none' }}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="header-search">
            <input type="text" placeholder="Search.." onChange={(e)=>setprompt(e.target.value)}/>
            <button onClick={()=>handleSearch()}>
              <img src={icon} alt="Search Icon"/>
            </button>
          </div>
          <div className="header-list" style={{ display: isMenuOpen ? 'block' : '' }}>
            <ul>
              <Link to='/' style={{ textDecoration:'none' }}>
                <li>Home</li>
              </Link>
              <Link to='/review-form' style={{ textDecoration:'none' }}>
                <li>Write Review</li>
              </Link>
              <Link to='/about' style={{ textDecoration:'none' }}>
                <li>About Me</li>
              </Link>
              <Link to='/login' style={{ textDecoration:'none' }}>
                <li>My Account</li>
              </Link>
            </ul>
          </div>
          <div className="hamburger" >
          <input className="checkbox"  type="checkbox" id="checkbox" onClick={toggleMenu}/>
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
