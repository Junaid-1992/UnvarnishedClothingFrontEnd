import React, { useEffect, useState } from "react";
import hey2 from "../../assets/Images/sen2.png"
import hey from "../../assets/Images/sezancard.png"
import err from "../../assets/Images/error.png"
import { useDispatch, useSelector } from "react-redux";
import { addComment, getallsingleproductcomments } from "../../Redux/Features/addCommentSlice";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Comments=({product_id})=>{

    console.log("comment",product_id)

    const [fetch,setfetch]=useState(true)

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        comment: "",
        posted_by: "",
        email: "",
        product_id:product_id
      });
      const resetForm = () => {
        setFormData({
          comment: "",
          posted_by: "",
          email: "",
          product_id: product_id // Or you can set it to null if not required
        });
      };
      
    
      // Step 2: Handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    

    const handle_post_comment= async (e)=>{

        e.preventDefault()

        console.log("Form data submitted:", formData);

    const resultAction = await dispatch(addComment(formData))

        if(resultAction)
        {
            // toast.success(resultAction.payload.message)
            resetForm()

            setfetch(!fetch)
        }

        
        
        
        

    }

    const Comments= useSelector((state)=>state.addcomment.comments)
    useEffect(()=>{

        dispatch(getallsingleproductcomments(product_id))

    },[fetch])



    console.log(Comments,"pop")


    const AllSingleBrandReviews= useSelector((state)=>state.addreview.getSingleBrandReviews)
    console.log(AllSingleBrandReviews,"TS")

    const navigate=useNavigate()

    const Product_Navigate=(p,brand)=>{

      console.log(p)
  navigate(`/product1/${brand}/${p}`)


}


    return(

        <>

<div className="Comments-pp">
    <ToastContainer position="bottom-center"/>
            <h2>Comments</h2>

            {
                Comments?.map((e,i)=>(

                    <>
                      <p >{e?.posted_by} (aUG 2024)</p>
            <div className="questioning--ar1">
              
              <div className="hfcgf">
                <p className="err-box"> <div className="errr-pic"><img src={err} alt="" /></div>{e?.comment}</p>
               
              </div>
            </div>
                    
                    </>

                ))
            }


            {
                Comments?.length===0 && 
                <div className="questioning--ar1">
              
                <div className="hfcgf">
                  <p className="err-box"> <div className="errr-pic"><img src={err} alt="" /></div>No comments here..</p>
                 
                </div>
              </div>
            }
          
            <div className="input--ar1">


        <form onSubmit={handle_post_comment}>
      <div className="input-div--ar1">

        <input
          type="text"
          name="comment"
          placeholder="add your thoughts..."
          value={formData.comment}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="input-div--ar1">
        <input
          type="text"
          name="posted_by"
          placeholder="name/username/alias"
          value={formData.posted_by}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="btn--ar1"  >
        Submit
      </button>

        </form>
    </div>
            <div className="reviews--ar1">
            <p>Reviews Of The Same Item</p>
            </div>
            <div className="item--ar1">
            {
              AllSingleBrandReviews?.map((e,i)=>(


           
              <div className="item1--ar1" key={i}  onClick={()=>Product_Navigate(e._id,e.brand)}>
                <div className="item-img--ar1">
                 <img src={e?.pictures[0]} alt="" />
                </div>
                <div className="item-description--ar1">
                   <h2>{e?.brand}</h2>

                  <h3>{e?.productName}</h3>
                  <h4>{e?.height}, {e?.size}</h4>
                 
                </div>
              </div>
              
              
            ))
            
            
          }
          </div>
          </div>
        </>



    )




}


export default Comments