import React from "react";
import { Link } from "react-router-dom";


const MainSection=()=>{

return(

<>
<section class="section-1">
        <div class="container">
            <div class="main-honest">
                <div class="box">
                    <span>
                        <h2>Honest Photo Reviews</h2>
                        <h2>& Resale Of </h2>
                        <h2>Contemporary Fashion Brands</h2>
                    </span>
                    
                    <button>
                    <Link className="none-list" to='/about'>
                        <p>About Me</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
  <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.29289L19.3431 0.928932C18.9526 0.538408 18.3195 0.538408 17.9289 0.928932C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM0 9H25V7H0V9Z" fill="#787878"/>
</svg>
                          </Link>
                    </button>

                 
                </div>
            </div>
        </div>
    </section>
</>


)



}


export default MainSection;