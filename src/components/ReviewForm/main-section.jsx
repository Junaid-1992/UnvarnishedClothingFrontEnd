
// import React from "react";

// const MainSection = () => {

//     return (


//         <>

//             <section class="review-form">
//                 <div class="container">
//                     <div class="main-review">
//                         <div class="form-part-1">
//                             <h2>tell us, <br />
//                                 what did you think?</h2>

//                         </div>
//                         <div class="form-part-2">

//                             <div class="twenty-buttons">
//                                 <h2>what brand did you buy from?*</h2>
//                                 {/* <input type="text" placeholder="Select Brand"/> */}
//                                 <select>
//                                     <option value="0">Select Brand:</option>
//                                     <option value="1">Add New Brand</option>
//                                     <option value="2">option 2</option>
//                                     <option value="3">option 3</option>
//                                     <option value="4">option 4</option>
//                                     <option value="5">option 5</option>
//                                     <option value="6">option 6</option>
//                                     <option value="7">option 7 </option>
//                                     <option value="8">option 8</option>
//                                     <option value="9">option 9</option>
//                                     <option value="10">option 10</option>
//                                     <option value="11">option 11</option>
//                                     <option value="12">option 12</option>
//                                 </select>
//                             </div>

//                             <div class="twenty-buttons">
//                                 <h2>what's the name of the product?*</h2>
//                                 <input type="text" placeholder="e.g. Pippa short dress" />
//                             </div>


//                             <div class="twenty-buttons">
//                                 <h2>what color did you buy?*</h2>
//                                 <input type="text" placeholder="e.g. Blue/Ecru" />
//                             </div>



//                             <div class="twenty-buttons">
//                                 <h2>what size did you buy?</h2>

//                                 <div class="btns-20">
//                                     <button>size XXS</button>
//                                     <button>size XS</button>
//                                     <button>size S</button>
//                                     <button>size M</button>
//                                     <button>size L</button>
//                                     <button>size XL</button>
//                                     <button>size XLL</button>
//                                     <button>size 00</button>
//                                     <button>size 0</button>
//                                     <button>size 2</button>
//                                     <button>size 4</button>
//                                     <button>size 6</button>
//                                     <button>size 8</button>
//                                     <button>size 10</button>
//                                     <button>size 12</button>
//                                     <button>size 14</button>
//                                     <button>size 16</button>
//                                     <button>size 18</button>
//                                     <button>N/A</button>
//                                     <button>other</button>
//                                 </div>
//                             </div>

//                             <div class="twenty-buttons">
//                                 <h2>How Tall are you?</h2>

//                                 <div class="btns-20">
//                                     <button> 5'0 </button>
//                                     <button>5'1-5'2</button>
//                                     <button>5'3-5'4</button>
//                                     <button>5'5-5'6</button>
//                                     <button>5'7-5'8</button>
//                                     <button>5'9-5'10</button>
//                                     <button>5'11</button>
//                                 </div>
//                             </div>
//                             <div class="twenty-buttons">
//                                 <h2>share some pics*</h2>
//                                 <div class="click-add-img">
//                                   <input type="file" name="Image " id=""  className="hello-imge-selet"/>
//                                   <h2>click to add photos</h2>
//                                   <p>or drag and drop</p>
//                                   <p>supports PNG, JPG max file size of 20MB</p>
//                                 </div>
//                             </div>
//                             <div class="twenty-buttons">
//                                 <h2>what did you think?*</h2>
//                                 <textarea name="" id="" placeholder="e.g. the color is a little more muted than what i would’ve expected..."></textarea>
//                             </div>
//                             <div class="twenty-buttons">
//                                 <h2>what is your email?</h2>
//                                 <input type="text" placeholder="e.g. shopaholic@gmail.com" />
//                             </div>
//                             <div class="review-p-button">
//                                 <p>all reviews are anonymous and we do not publish your email</p>
//                                 <div class="review-large-btn">
//                                     <button>Submit</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//         </>

//     )





// }


// export default MainSection












import React, { useEffect, useState } from "react";
import { cloudinaryUpload } from "../../cloudinaryUpload/cloudinaryUpload";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { addReview } from "../../Redux/Features/addreviewSlice";
import CustomToast from "../../Toast/customToast";
import { useNavigate } from "react-router-dom";



const MainSection = () => {
  // State hook for all form data
  const [formData, setFormData] = useState({
    brand: "",
    productName: "",
    color: "",
    size: "",
    height: "",
    pictures: [],
    review: "",
    email: "",
    newBrand:""
  });

  const dispatch = useDispatch()

  const [shownewbrand,setshownewbrand]=useState(false)
  const [newBrand, setNewBrand] = useState("");
  // Handler functions
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if(value==="newBrand")
      
  //   { 
  //     console.log(name)
  //     setshownewbrand(true)
  //   }
  //   else{
  //     setshownewbrand(false)
  //   }
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleNewBrandChange = (e) => {
    setNewBrand(e.target.value); // Track new brand input value
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle dropdown change
    if (name === "brand") {
      if (value === "newBrand") {
        setshownewbrand(true); // Show input field for new brand
      } else {
        setshownewbrand(false); // Hide input field if another option is selected
        setFormData((prev) => ({ ...prev, newBrand: "" })); // Clear new brand input when hiding
      }
    }

    // Update the form data state
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const[showother,setshowother]=useState(false)

  const[index1,setindex1]=useState(null)

  const[index2,setindex2]=useState(null)

  const[index3,setindex3]=useState(false)

  const handleSizeClick = (size,index) => {

    setindex1(index)


    if(size==="other")
    {
      setshowother(true)
    }else{
      setshowother(false)
    }
    setFormData((prev) => ({ ...prev, size }));
  };

  const handleHeightClick = (height,index) => {

    setindex2(index)
    setFormData((prev) => ({ ...prev, height }));
  };
  const navigate= useNavigate()

  const [images,setimages]=useState([])

  // const handleFileChange =async (e) => {

  //   const image= await cloudinaryUpload(e.target.files[0])
  //   console.log(image,"Image")
  //   images.push(image)

  //   setFormData((prev) => ({
  //     ...prev,
  //     pictures: [...image],
  //   }));
  // };


  // const handleFileChange = async (e) => {
  //   try {
  //     e.target.files.forEach(async element => {
  //       const image = await cloudinaryUpload(e.target.files[element]);
  //       console.log(image, "Image");
    
  //       // Assuming images is an array you want to push the uploaded image to.
  //       images.push(image);
    
  //       setFormData((prev) => ({
  //         ...prev,
  //         pictures: [...prev.pictures, image], // Use prev.pictures to retain previous images
  //       }));
  //     });
     
  //   } catch (error) {
  //     console.error("Error uploading the image:", error);
  //   }
  // };
  
  const handleFileChange = async (e) => {
    try {
      const files = Array.from(e.target.files); // Convert FileList to array
  
      for (const file of files) {
        const image = await cloudinaryUpload(file); // Upload each file
        console.log(image, "Image");
  
        // Assuming images is an array where you want to push the uploaded image
        images.push(image); 
  
        // Update formData state with the new images
        setFormData((prev) => ({
          ...prev,
          pictures: [...prev.pictures, image], // Keep existing images and add new one
        }));
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };
  
  const handleSubmit = async (e) => {
    setindex3(true)
    e.preventDefault();
    // Here you can handle the form submission
    console.log(formData);
    if(formData.pictures.length<1)
    {
      toast.error("Please Upload 1 images.")
    }
    else{

      const revisedBrand = formData.brand==="newBrand"?formData.newBrand:formData.brand
  
      const revisedFormData = { ...formData, brand: revisedBrand };
      console.log(revisedFormData,"REVISED")

      const resultAction = await dispatch(addReview(revisedFormData))

      // if(resultAction)
      // {
      //   console.log(resultAction.payload,"REVIEW POSTED")
       
      //   if(resultAction.payload.error)
      //     {
      //       toast.error(resultAction.payload.message)
      //     } 
      //     else if(resultAction.payload.error==="Review Posted Successfully.") 
      //     {
      //       console.log(resultAction.payload.error,"TS")
      //       toast.success("Review Posted")
      //     }  
      //     else{
      //       toast.success(resultAction.payload.message)
      //         // navigate('/')
      //     }

      // }

    }







  };

  const [showshoesize,setshowshoesize]=useState(false)



  return (
    <section className="review-form">
      {/* <ToastContainer position="bottom-center" progressClassName="progress-bar-reverse"/> */}

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false} // Make sure this is set to false
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="container">
        <div className="main-review">
          <div className="form-part-1">
            <h2>tell us, <br /> what did you think?</h2>
          </div>
          <div className="form-part-2">
            <div className="twenty-buttons">
              <h2>what brand did you buy from?*</h2>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
              >
                <option value="">Select Brand:</option>
                <option value="newBrand">Add New Brand</option>
                <option value="option 2">option 2</option>
                <option value="option 3">option 3</option>
                <option value="option 4">option 4</option>
                <option value="option 5">option 5</option>
                <option value="option 6">option 6</option>
                <option value="option 7">option 7</option>
                <option value="option 8">option 8</option>
                <option value="option 9">option 9</option>
                <option value="option 10">option 10</option>
                <option value="option 11">option 11</option>
                <option value="option 12">option 12</option>
              </select>
            </div>


            {shownewbrand && (
              <div className="twenty-buttons">
                <input
                  type="text"
                  name="newBrand"
                  placeholder="Please specify the brand name"
                  value={formData.newBrand}
                  onChange={handleInputChange} // Separate handler for the new brand input
                />
              </div>
            )}

            <div className="twenty-buttons">
              <h2>what's the name of the product?*</h2>
              <input
                type="text"
                name="productName"
                placeholder="e.g. Pippa short dress"
                value={formData.productName}
                onChange={handleInputChange}
              />
            </div>

            <div className="twenty-buttons">
              <h2>what color did you buy?*</h2>
              <input
                type="text"
                name="color"
                placeholder="e.g. Blue/Ecru"
                value={formData.color}
                onChange={handleInputChange}
              />
            </div>

            <div className="twenty-buttons">
              <h2>what size did you buy?</h2>

              <div className="change-btn-box">
                <button onClick={()=>setshowshoesize(false)} style={{background: !showshoesize? "#e0afa0":"transparent",color: !showshoesize? '#fff':'black'}}>
                Clothing Size
                </button>


                <button onClick={()=>setshowshoesize(true)} style={{background: showshoesize? "#e0afa0":"transparent",color: showshoesize? '#fff':'black'}}>
                Shoe Size
                </button>
              </div>

  {
    !showshoesize &&


              <div className="btns-20" >
                {["size XXS", "size XS", "size S", "size M", "size L", "size XL", "size XXL", "size 00", "size 0", "size 2", "size 4", "size 6", "size 8", "size 10", "size 12", "size 14", "size 16", "size 18", "N/A", "other"].map((s,i) => (
                  <button
                    key={i}
                    onClick={() => handleSizeClick(s,i)}
                    className={formData.size === s ? "selected" : ""}
                    style={{backgroundColor:index1===i?'#E0AFA0':'#F4F3EE', color:index1===i?'black':'#000'}}
                  >
                    {s}
                  </button>
                ))}

                {
                  showother &&


       <div className="twenty-buttons">
          
          <input
            type="text"
            name="size"
            placeholder="e.g size 10 etc"
            value={formData.size==="other"?" ":formData.size}
            onChange={handleInputChange}
          />
        </div>
                }


              </div>

      


  }


        {
          showshoesize && 



              <div className="btns-20">
                {["Shoe Size 6 ", "Shoe Size 6.5", "Shoe Size 7", "Shoe Size 7.5", "Shoe Size 8", "Shoe Size 8.5", "Shoe Size 9", "Shoe Size 9.5", "Shoe Size 10",  "n/a", "other" ].map((s,i) => (
                  <button
                    key={s}
                    onClick={() => handleSizeClick(s,i)}
                    className={formData.size === s ? "selected" : ""}
                    style={{backgroundColor:index1===i?'#E0AFA0':'#F4F3EE', color:index1===i?'black':'#000'}}
                  >
                    {s}
                  </button>
                ))}

                {
                  showother &&

<div className="twenty-buttons">
          
<input
            type="text"
            name="size"
            placeholder=" "
            value={formData.size==="other"?" ":formData.size}
            onChange={handleInputChange}
          />
        </div>
                }

              </div>
        }              



            </div>

            <div className="twenty-buttons">
              <h2>How tall are you?</h2>
              <div className="btns-20">
                {["5'0", "5'1-5'2", "5'3-5'4", "5'5-5'6", "5'7-5'8", "5'9-5'10", "5'11"].map((h,i) => (
                  <button
                    key={h}
                    onClick={() => handleHeightClick(h,i)}
                    className={formData.height === h ? "selected" : ""}
                    style={{backgroundColor:index2===i?'#E0AFA0':'#F4F3EE', color:index2===i?'black':'#000'}}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>

            <div className="twenty-buttons">
              <h2>share some pics*</h2>
              <div className="click-add-img">
                <input
                  type="file"
                  name="pictures"
                  id=""
                  className="hello-imge-selet"
                  onChange={handleFileChange}
                  multiple
                />

                {
                  images.length===0 &&
                  <>
                   <h2>click to add photos</h2>
                <p>or drag and drop</p>
                <br/>
                <p>supports PNG, JPG max file size of 20MB</p>
                  </>
                }
                  
               

                <div style={{display:'flex' ,flexDirection:'row'}}className="imagesLider">
                  {
                    images.map((e,i)=>(
                    
                      <div key={i}  className="drop-imger">
                            {
                              e!="" &&


                          <img style={{width:"100%",height:'40px'}}
                            src={e}
                          
                          />
                            }

                      </div>
                      


))
}
</div>

              </div>
            </div>

            <div className="twenty-buttons">
              <h2>what did you think?*</h2>
              <textarea
                name="review"
                placeholder="e.g. the color is a little more muted than what I would’ve expected..."
                value={formData.review}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="twenty-buttons">
              <h2>what is your email?</h2>
              <input
                type="text"
                name="email"
                placeholder="e.g. shopaholic@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="review-p-button">
              <p>all reviews are anonymous and we do not publish your email</p>
              <div className="review-large-btn">
                <button onClick={handleSubmit} style={{backgroundColor:index3?'#E0AFA0':'none'}}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
