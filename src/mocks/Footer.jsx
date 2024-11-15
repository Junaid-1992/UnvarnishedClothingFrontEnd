import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import footerlogo from "../assets/logo/footer-logo.png";
import footerlogo1 from "../assets/Images/ff-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
       <div class="container">
            <div class="main-footer">
                <div class="footer-part-1">
                    <div class="partition-1">
                        <div class="footer-logo">
                          <img src={footerlogo1} alt="" />

                        </div>
                        <p>a biweekly(ish) roundup of the most popular, most recent, and the worst fails.</p>
                        <div class="input-btn">
                        <input type="email" placeholder="Email Address *"/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            <div class="partition-2">
                <h2>SHORTCUTS</h2>
                <ul>
                <Link to='/' style={{textDecoration:'none'}}>
                    <li>Home</li>
                    </Link>

                    <Link to='/review-form' style={{textDecoration:'none'}}>
                    <li>Write Review</li>

                    </Link>


                    <Link to='/about' style={{textDecoration:'none'}}>
                    
                    <li>About Me</li>

    </Link>

    <Link to='/review-form' style={{textDecoration:'none'}}>

                    <li>My Account</li>

                    </Link>



                </ul>
            </div>
            <div class="partition-2">
                <h2>FAQs</h2>
                <ul>
                    <li>The Exchange</li>
                    <li>Terms Of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div class="partition-2">
                <h2>CONTACT  INFO</h2>
                <ul>
                    <li><a href="">hello@unvarnished.clothing</a></li>
                    </ul>
                   
            </div>


                </div>
                
            </div>

            <div className="copy-right">
                <p> 2024@All Rights Reserved</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
