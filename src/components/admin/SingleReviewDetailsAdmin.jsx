// import React, { useEffect } from "react";


// import pp1 from "../../assets/Images/Screenshot 2024-08-29 165938.png"
// import pp2 from "../../assets/Images/image 59.png"
// import pp3 from "../../assets/Images/image 60.png"          
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getsinglereview } from "../../Redux/Features/addreviewSlice";

// const SingleReviewDetailsAdmin=()=>{

//   const {id}= useParams()
//   console.log(id)

//   const dispatch= useDispatch()
//   const review = useSelector((state) => state.addreview.singleReview);

//   useEffect(()=>{
//     dispatch(getsinglereview(id));

//   },[])

//     return (

//         <>

// <div class="main-ab-re">
//         <div class="main-listing-1-re">
//           <div class="main-c-listing-1-re">
//             <div class="child-1-main-c-listing-1-re">
//               <h1>Reviews #1</h1>
//               <div class="ul-div-4">
//                 <ul>
//                   <li>email: {review?.email}</li>
//                   <li>BRAND: {review?.brand}</li>
//                   <li>PRODUCT: {review?.productName}</li>
//                   <li>color: {review?.color}</li>
//                   <li>size: {review?.size}</li>
//                   <li>height: {review?.height}</li>
//                 </ul>
//               </div>
//             </div>
//             <div class="child-2-main-c-listing-1-re">
//               <div class="inner-con-2-main-c-listing-2-c-1">
//                 <h2>June 24, 2024, 7:24am eST</h2>
//               </div>
//               <div class="main-c-listing-2-c-2">
//                 <h1>images</h1>

               
//               <div class="main-c-listing-2-c-2-img-div">
//                 <div class="img-div-main-c" style={{display:'flex',flexDirection:'row',gap:'30%'}}>
//                   {
//                     review?.pictures.map((e,i)=>(

//                       <img src={e} alt=""  key={i}/>

//                     ))
//                   }
//                 </div>
                 
                
//               </div>
//               </div>
//               <div class="inner-con-2-main-c-listing-2-c-4">
//                 <h2>tags</h2>
//                 <div class="btn-group">
//                   <button class="tags-1">french brands</button>
//                   <button class="tags">dress</button>
//                   <button class="tags">size S</button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="main-c-listing-2-re">
//             <div class="p-main-c-listing-2-re">
//               <h1>User Thoughts</h1>
//               <p>
//                {review?.review}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
   

        
//         </>


//     )



// }

// export default SingleReviewDetailsAdmin














import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getsinglereview, updatereview } from "../../Redux/Features/addreviewSlice";
import axios from "axios";
import { baseurl } from "../../baseUrl";

const SingleReviewDetailsAdmin = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.addreview.singleReview);

  // State for editing mode and review data
  const [isEditing, setIsEditing] = useState(false);
  const [editableReview, setEditableReview] = useState({
    _id:'',
    email: '',
    brand: '',
    productName: '',
    color: '',
    size: '',
    height: '',
    review: '',
    pictures: [],
    tags:[]
  });

  // Fetch review data
  useEffect(() => {
    dispatch(getsinglereview(id));
  }, []);

  // Populate the editableReview state when the review is fetched
  useEffect(() => {
    if (review) {
      console.log("uSE EFFECT")
      setEditableReview({
        _id:review._id,
        email: review.email || '',
        brand: review.brand || '',
        productName: review.productName || '',
        color: review.color || '',
        size: review.size || '',
        height: review.height || '',
        review: review.review || '',
        pictures: review.pictures || [],
        tags:review.tags || []
      });
    }
  }, [review]);

  // Handle input change for editable fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableReview({
      ...editableReview,
      [name]: value,
    });
  };

  // Handle save action and switch back to view mode
  const handleSave = () => {
     dispatch(updatereview(editableReview))
    setIsEditing(false);
    // Optionally, dispatch an action to save the updated review data to the server
  

  };

  // Switch to editing mode
  const handleEdit = () => {
    setIsEditing(true);
  };

    // State to hold the new tag
    const [newTag, setNewTag] = useState("");


  // Handle tag change
  const handleTagChange = (index, value) => {
    const updatedTags = [...editableReview.tags];
    updatedTags[index] = value;
    setEditableReview({ ...editableReview, tags: updatedTags });
  };

  // Add new tag
  const handleAddTag = () => {
    if (newTag.trim()) {
      setEditableReview({
        ...editableReview,
        tags: [...editableReview.tags, newTag],
      });
      setNewTag(""); // Clear the input field after adding
    }
  };

  // Remove a tag
  const handleRemoveTag = (index) => {
    const updatedTags = [...editableReview.tags];
    updatedTags.splice(index, 1);
    setEditableReview({ ...editableReview, tags: updatedTags });
  };

  return (
    <>
      <div className="main-ab-re">
        <div className="main-listing-1-re">
          <div className="main-c-listing-1-re">
            <div className="child-1-main-c-listing-1-re">
              <h1>Review </h1>
              <div className="ul-div-4">
                <ul>
                  {isEditing ? (
                    <>
                      <li>
                        Email:{" "}
                        <input
                          type="text"
                          name="email"
                          value={editableReview.email}
                          onChange={handleInputChange}
                        />
                      </li>
                      <li>
                        Brand:{" "}
                        <input
                          type="text"
                          name="brand"
                          value={editableReview.brand}
                          onChange={handleInputChange}
                        />
                      </li>
                      <li>
                        Product:{" "}
                        <input
                          type="text"
                          name="productName"
                          value={editableReview.productName}
                          onChange={handleInputChange}
                        />
                      </li>
                      <li>
                        Color:{" "}
                        <input
                          type="text"
                          name="color"
                          value={editableReview.color}
                          onChange={handleInputChange}
                        />
                      </li>
                      <li>
                        Size:{" "}
                        <input
                          type="text"
                          name="size"
                          value={editableReview.size}
                          onChange={handleInputChange}
                        />
                      </li>
                      <li>
                        Height:{" "}
                        <input
                          type="text"
                          name="height"
                          value={editableReview.height}
                          onChange={handleInputChange}
                        />
                      </li>
                    </>
                  ) : (
                    <>
                      <li>Email: {editableReview.email}</li>
                      <li>Brand: {editableReview.brand}</li>
                      <li>Product: {editableReview.productName}</li>
                      <li>Color: {editableReview.color}</li>
                      <li>Size: {editableReview.size}</li>
                      <li>Height: {editableReview.height}</li>
                    </>
                  )}
                </ul>
              </div>
            </div>

            <div className="child-2-main-c-listing-1-re">
              <div className="inner-con-2-main-c-listing-2-c-1">
                <h2>June 24, 2024, 7:24am EST</h2>
              </div>

              <div className="main-c-listing-2-c-2">
                <h1>Images</h1>
                <div className="main-c-listing-2-c-2-img-div">
                  <div className="img-div-main-c" style={{ display: "flex", flexDirection: "row", gap: "30%" }}>
                    {editableReview.pictures.map((e, i) => (
                      <img src={e} alt="" key={i} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="inner-con-2-main-c-listing-2-c-4">
                <h2>Tags</h2>
                
                <div className="btn-groupkkkk">
                  {isEditing ? (
                    <>
                      {editableReview?.tags?.map((tag, index) => (
                        <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }} className="input-kkkk-box">
                          <input
                            type="text"
                            value={tag}
                            onChange={(e) => handleTagChange(index, e.target.value)}
                          />
                          <button onClick={() => handleRemoveTag(index)}>Remove</button>
                        </div>
                      ))}
<div className="input-kkkk-box">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="New tag"
                      />
                      <button onClick={handleAddTag} className="new-add-btn" >Add Tag</button>
                      </div>
                    </>

                   
                  ) : (
                    editableReview?.tags?.map((tag, index) => (
                      <button className="tags-1" key={index}>{tag}</button>
                    ))
                  )}
                </div>


              </div>
            </div>
          </div>

          <div className="main-c-listing-2-re">
            <div className="p-main-c-listing-2-re">
              <h1>User Thoughts</h1>
              {isEditing ? (
                <textarea
                  name="review"
                  value={editableReview.review}
                  onChange={handleInputChange}
                  rows="4"
                  cols="50"
                />
              ) : (
                <p>{editableReview.review}</p>
              )}
            </div>
          </div>

          <div className="listing-post">
            {isEditing ? (
              <button onClick={handleSave}>Save</button>
            ) : (
              <button onClick={handleEdit}>Edit</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleReviewDetailsAdmin;
