// import React, { useEffect, useState } from "react";
// import insta from "../../assets/Images/insta.png"
// import girl_big from '../../assets/Images/productgirlbig.png'
// import girl1 from '../../assets/Images/image51.png'
// import girl2 from '../../assets/Images/image52.png'
// import girl3 from '../../assets/Images/image53.png'

// import hey from "../../assets/Images/sezancard.png"

// import hey2 from "../../assets/Images/sen2.png"

// import err from "../../assets/Images/error.png"
// import Wishes_Drawer from "./Wishes_Drawer";
// import Listing_Drawer from "./Listing_Drawer";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getSingleBrandReviews, getsinglereview } from "../../Redux/Features/addreviewSlice";
// import Comments from "./Comment";
// import SaleProductsListing from "./SaleProductList";
// import { getbrandlistings } from "../../Redux/Features/addListingSlice";
// const MyComponent1 = () => {
//   const dispatch=useDispatch()  
//   const {id,brandname}=useParams()
//   console.log(id,"link",brandname)

//   const [show_drawer,setshow_drawer]= useState('wishes')

//   const review= useSelector((state)=>state.addreview.singleReview)
//   useEffect(()=>{
//     dispatch(getsinglereview(id))

//     dispatch(getSingleBrandReviews(brandname))

//     dispatch(getbrandlistings(brandname))

   
//   },[id])






//   console.log(review,"SINGLE REVIEW")

//   const [showimage,setshowimage]=useState(0)


//   return (

//     <section className="prouduct">
//       <div className="container">
//   <div className="main--ar1">


//     <div className="first-col--ar1">
//       <div className="container--ar1">
//         <div className="content--ar1">
//           <div className="heading1--ar1">
//             <h1>{review?.brand}</h1>
//             <p>{review?.productName}</p>
//             <p style={{ color: "#9A8C98" }}>{review?.height}, {review?.size}</p>
//           </div>
     
//         </div>
//         <div className="image-div--ar1">
//           <div className="first-col-img--ar1">
//             <img
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 objectFit: "cover",
//                 display: "block",
//               }}
//               src= {review?.pictures[showimage]}
//               alt=""
//               loading="lazy"
//             />
//           </div>
//           <div className="second-col-img--ar1">
//             <div onClick={()=>setshowimage(0)}>
//               <img
//                 src= {review?.pictures[0]}
//                 alt=""
//                 loading="lazy"
//               />
//             </div>
//             <div onClick={()=>setshowimage(1)}>
//               <img
//                  src= {review?.pictures[1]}
//                  alt=""
//                  loading="lazy"
//               />
//             </div>
//             <div onClick={()=>setshowimage(2)}>
//               <img
//                 src= {review?.pictures[2]}
//                 alt=""
//                 loading="lazy"
//               />
//             </div>
//           </div>
//         </div>
//         <div style={{ lineHeight: 1.5 }} className="description--ar1">
//           <h6>User Thoughts</h6>
//           <p>
//             {review?.review}
//           </p>

//           {/* <p>I got my usual size 4 and I LOVE IT. I would wear this with a pencil skirt as well as jeans for a more dressed down look. I love the little details – the fabric-covered buttons, the ruffle drape detail, and also the slightly balloon sleeves which I think look super girly.</p>

//           <p>The one thing to note is that the blouse itself is opaque but I did notice that deodorant stains happen pretty easily. I’m going to try a spray deodorant to see if that helps.</p>
//           <p>Love this shirt. I’m 5’6, 135lbs.</p> */}

//           <h5>FRENCH BRANDS, TOPS, BUTTON-DOWN SHIRT, 5’5-5’6, SIZE 4</h5>
//           <div className="insta--ar1">
//             <span>

//               <div className="hell-insta">
//                 <img src={insta} alt="" />
//               </div>
//               Follow us for brand vs. IRL
//               comparisons!
//             </span>
//           </div>
         
        

// <Comments product_id={id}  />


//         </div>
//       </div>
//     </div>

// {/* 
//     <div className="second-col--ar1">

//     <p className="heading--ar1">The Exchange</p>
//       <div className="cart--ar1">
//         <div className="list--ar1">
//           <p>Wishes</p>
//           <p className="active--ar1">Listing</p>
//         </div>
//         <div className="border--ar1"></div>

//         <div className="cart-products--ar1">
//           <p className="brand--ar1">Brand : Sezane</p>
//           <p className="add--ar1">+Add My Listing</p>

//           <div className="products--ar1">
            
//          <h3>Jenna dress, green/ecru, Size 10</h3>
//          <h3>Colette Mariniere, Blue/ecru, size 4</h3>

//          <h3>Paula babies, Patent Purple, Shoe size 7.5</h3>
//           </div>
//         </div>
//       </div>


//     </div> */}

// <div className="second-col--ar1">

// <p className="heading--ar1">The Exchange</p>
//   <div className="cart--ar1">
//     <div className="list--ar1">
//       <p   className= {show_drawer==="wishes"?"active--ar1":''}  onClick={()=>setshow_drawer("wishes")}>Wishes</p>
//       <p className={show_drawer==="listing"?"active--ar1":''} onClick={()=>setshow_drawer("listing")}>Listing</p>
//     </div>
//     <div className="border--ar1"   ></div>

//           {
//             show_drawer==="wishes" ? (<Wishes_Drawer  />):(<Listing_Drawer />)
//           }

//           <SaleProductsListing/>
    
//   </div>


// </div>
//   </div>
//       </div>
//     </section>


  
//   );
// };

// export default MyComponent1;



import React, { useEffect, useState } from "react";
import insta from "../../assets/Images/insta.png";
import Wishes_Drawer from "./Wishes_Drawer";
import Listing_Drawer from "./Listing_Drawer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBrandReviews, getsinglereview, Tagsresults } from "../../Redux/Features/addreviewSlice";
import Comments from "./Comment";
import SaleProductsListing from "./SaleProductList";
import { getbrandlistings } from "../../Redux/Features/addListingSlice";
import { getbrandWishes } from "../../Redux/Features/addWishesSlice";

const MyComponent1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id, brandname } = useParams();
  const [show_drawer, setshow_drawer] = useState('wishes');
  const review = useSelector((state) => state.addreview.singleReview);
  const [showimage, setshowimage] = useState(0);
  
  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dispatch actions and set loading state
    const fetchData = async () => {
      setLoading(true); // Start loading
      await dispatch(getsinglereview(id));
      await dispatch(getSingleBrandReviews(brandname));
      await dispatch(getbrandlistings(brandname));
      await dispatch(getbrandWishes(brandname))
      setLoading(false); // Stop loading when data is fetched
    };

    fetchData();
  }, [ ]);

  // Show a loading indicator if the data is still being fetched
  if (loading) {
    return <div className="loader-main" style={{height:'100vh'}} >      <div class="loader">
    <span>&lt;</span>
    <span>LOADING</span>
    <span>/&gt;</span>
  </div></div>; // You can replace this with any loader/spinner
  }



  const search_tags=(tagname)=>{

    if(tagname!='')
    {
      console.log(tagname)

      const formData={
        prompt:tagname
      }

      dispatch(Tagsresults(formData))
      navigate('/tagresults')


    }


  }




  return (
    <section className="prouduct">
      <div className="container">
        <div className="main--ar1">
          <div className="first-col--ar1">
            <div className="container--ar1">
              <div className="content--ar1">
                <div className="heading1--ar1">
                  <h1>{review?.brand}</h1>
                  <p>{review?.productName}</p>
                  <p style={{ color: "#9A8C98" }}>{review?.height}, {review?.size}</p>
                </div>
              </div>
              <div className="image-div--ar1">
                <div className="first-col-img--ar1">
                  <img
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                    }}
                    src={review?.pictures[showimage]}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="second-col-img--ar1">
                  {review?.pictures.map((image, index) => (
                    <div key={index} onClick={() => setshowimage(index)}>
                      <img src={image} alt="" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ lineHeight: 1.5 }} className="description--ar1">
                <h6>User Thoughts</h6>
                <p>{review?.review}</p>
                <div className="blue-btn" style={{display:'flex' , flexDirection:'row',gap:'10px'}}>
                  {
                    review?.tags?.map((e,i)=>(
                      <button key={i} onClick={()=>search_tags(e)}> {e},</button>

                    ))
                  }

               
                </div>
                <div className="insta--ar1">
                  <span>
                    <div className="hell-insta">
                      <img src={insta} alt="" />
                    </div>
                    Follow us for brand vs. IRL comparisons!
                  </span>
                </div>
                <Comments product_id={id} />
              </div>
            </div>
          </div>

          <div className="second-col--ar1">
            <p className="heading--ar1">The Exchange</p>
            <div className="cart--ar1">
              <div className="list--ar1">
                <p
                  className={show_drawer === "wishes" ? "active--ar1" : ""}
                  onClick={() => setshow_drawer("wishes")}
                >
                  Wishes
                </p>
                <p
                  className={show_drawer === "listing" ? "active--ar1" : ""}
                  onClick={() => setshow_drawer("listing")}
                >
                  Listing
                </p>
              </div>
              <div className="border--ar1"></div>

              {show_drawer === "wishes" ? (
                <Wishes_Drawer />
              ) : (
                <Listing_Drawer />
                
              )}

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyComponent1;
