



import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getsinglereview, updatereview } from "../../Redux/Features/addreviewSlice";
import axios from "axios";
import { baseurl } from "../../baseUrl";

const SingleReviewDetails = () => {
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
                <div className="btn-group">
                  <button className="tags-1">French brands</button>
                  <button className="tags">Dress</button>
                  <button className="tags">Size S</button>
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

export default SingleReviewDetails;
