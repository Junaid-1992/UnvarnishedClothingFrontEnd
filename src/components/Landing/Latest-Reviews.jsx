import React, { useEffect } from "react";
import img1 from "../../assets/Images/Frame 95.png"
import img2 from "../../assets/Images/Frame 174.png"
import img3 from "../../assets/Images/Frame 171.png"
import img4 from "../../assets/Images/image 38.png"
import img5 from "../../assets/Images/Frame 172.png"
import img6 from "../../assets/Images/IMG_6106 2 1.png"
import img7 from "../../assets/Images/Frame 95 (1).png"
import img8 from "../../assets/Images/image 37.png"
import img9 from "../../assets/Images/Frame 96.png"
import img10 from "../../assets/Images/Frame 182.png"
import messageicon from "../../assets/Images/Message square.png"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getreviews } from "../../Redux/Features/addreviewSlice";


const LatestReviews=()=>{


    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
    const navigate = useNavigate()

    const Product_Navigate=(p,brand)=>{

            console.log(p)
        navigate(`/product1/${brand}/${p}`)


    }

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getreviews())
    },[])

    const reviews=useSelector((state)=>state.addreview.reviews)

console.log(reviews)
    return (
        <>
        
        
        
        <section class="section-2">
        <div class="container">
            <div class="main-latest">
                <div class="latest-title">
                    <h2>Latest Reviews</h2>
                    <Link to='/review-form' style={{textDecoration:'none'}}>
                    
                    <button>
                        + add my review
                    </button>
                    </Link>
                </div>

<div class="latest-boxes">


<div class="min-latest-card">
  {
    reviews?.map((e,i) => (
      <div class="latest-card" onClick={() => Product_Navigate(e._id, e.brand)} key={i}>
        <div class="latest-card-img">
          <img src={e.pictures[0]} alt="" loading="lazy" />
        </div>
        <div class="latest-card-title">
          <h2>{e.brand}</h2>
          <h3>{e.productName}</h3>
          <p>{e.height}, {e.size}</p>
          <div class="latest-button">
            <a href=""><span>FRENCH BRANDS, DRESS,</span> {e.height}, {e.size}</a>
            <button>
              <img src={messageicon} alt="" />
              <p>({e?.commentsCount})</p>
            </button>
          </div>
        </div>
      </div>
    ))
  }
</div>

 


    {/* <div class="min-latest-card">
    <div class="latest-card"  onClick={()=>Product_Navigate()}>
        <div class="latest-card-img">
            <img src={img3} alt="" />
        </div>
        <div class="latest-card-title">
            <h2>Sezane</h2>
            <h3>Pierro Shirt, Floral Print </h3>
            <p>5’5-5’6, Size 10 </p>
          
          
        <div class="latest-button">
              <a href=""><span>FRENCH BRANDS, DRESS,</span> 5’5-5’6, SIZE 4</a>
                <button>
                    <img src={messageicon} alt=""/>
                    <p>(3)</p>
                </button>
            </div>
        </div>
    </div>
    <div class="latest-card"  onClick={()=>Product_Navigate()}>
        <div class="latest-card-img">
            <img src={img4} alt=""/>
        </div>
        <div class="latest-card-title">
            <h2>Sezane</h2>
            <h3>Dorothea Dress, Trianon Print </h3>
            <p>5’5-5’6, Size 4</p>
           
         
        <div class="latest-button">
              <a href=""><span>FRENCH BRANDS, DRESS,</span> 5’5-5’6, SIZE 4</a>
                <button>
                    <img src={messageicon} alt=""/>
                    <p>(3)</p>
                </button>
            </div>
        </div>
    </div>
</div> */}

    {/* <div class="min-latest-card">
    <div class="latest-card"  onClick={()=>Product_Navigate()}>
        <div class="latest-card-img">
            <img src={img5} alt=""/>
        </div>
        <div class="latest-card-title">
            <h2>Sezane</h2>
            <h3>Dorothea Dress, Trianon Print</h3>
            <p> 5’5-5’6, Size 4</p>
           
          
        <div class="latest-button">
              <a href=""><span>FRENCH BRANDS, DRESS,</span> 5’5-5’6, SIZE 4</a>
                <button>
                    <img src={messageicon} alt=""/>
                    <p>(3)</p>
                </button>
            </div>
        </div>
    </div>
    <div class="latest-card"  onClick={()=>Product_Navigate()}>
        <div class="latest-card-img">
            <img src={img6} alt=""/>
        </div>
        <div class="latest-card-title">
            <h2>Aritzia</h2>
            <h3>Crew Neck Bodysuit, White</h3>
            <p>5’5-5’6, Size 2</p>
           
            
        <div class="latest-button">
              <a href=""><span>FRENCH BRANDS, DRESS,</span> 5’5-5’6, SIZE 4</a>
                <button>
                    <img src={messageicon} alt=""/>
                    <p>(3)</p>
                </button>
            </div>
        </div>
    </div>
</div> */}

    {/* <div class="min-latest-card">
    <div class="latest-card"  onClick={()=>Product_Navigate()}>
        <div class="latest-card-img">
            <img src={img7} alt=""/>
        </div>
        <div class="latest-card-title">
            <h2>Sandro</h2>
            <h3>Flutter Sleeve Blouse, Floral Print</h3>
            <p>5’5-5’6, Size 4</p>
            
          
        <div class="latest-button">
              <a href=""><span>FRENCH BRANDS, DRESS,</span> 5’5-5’6, SIZE 4</a>
                <button>
                    <img src={messageicon} alt=""/>
                    <p>(3)</p>
                </button>
            </div>
        </div>
    </div>
    <div class="latest-card"  onClick={()=>Product_Navigate()}>
        <div class="latest-card-img">
            <img src={img8} alt=""/>
        </div>
        <div class="latest-card-title">
            <h2>Alo Yoga</h2>
            <h3>Alo Lift Leggings, Navy</h3>
            <p>5’5-5’6, Size 6</p>
            
           
        <div class="latest-button">
              <a href=""><span>FRENCH BRANDS, DRESS,</span> 5’5-5’6, SIZE 4</a>
                <button>
                    <img src={messageicon} alt=""/>
                    <p>(3)</p>
                </button>
            </div>
        </div>
    </div>
</div> */}

    {/* <div class="min-latest-card">
    <div class="latest-card"  onClick={()=>Product_Navigate()}>
        <div class="latest-card-img">
            <img src={img9} alt=""/>
        </div>
        <div class="latest-card-title">
            <h2>Hermes</h2>
            <h3>Breathe Bracelet </h3>
            

            <div class="latest-button">
              <a href=""><span>FRENCH BRANDS, DRESS,</span> 5’5-5’6, SIZE 4</a>
                <button>
                    <img src={messageicon} alt=""/>
                    <p>(3)</p>
                </button>
            </div>
        </div>
    </div>
    <div class="latest-card"  onClick={()=>Product_Navigate()}>
        <div class="latest-card-img">
            <img src={img10} alt=""/>
        </div>
        <div class="latest-card-title">
            <h2>Maje</h2>
            <h3>Maxi Knit Dress, Navy</h3>
            <p>5’5-5’6, Size 4</p>
            
            
       <div class="latest-button">
              <a href=""><span>FRENCH BRANDS, DRESS,</span> 5’5-5’6, SIZE 4</a>
                <button>
                    <img src={messageicon} alt=""/>
                    <p>(3)</p>
                </button>
            </div>
        </div>
    </div>
</div> */}


</div>
<div class="main-latest-btn">
<Link to='/allreviews' style={{textDecoration:'none'}}>
    <button>See All</button>
    </Link>
</div>
            </div>
        </div>
    </section>
        
        </>


    )



}


export default LatestReviews