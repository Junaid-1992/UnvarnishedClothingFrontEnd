// import React, { useEffect, useRef } from "react";
// import Venom from '../../assets/Images/hello1.png';
// import Paypal from '../../assets/Images/hello2.png';

// const AddMyListings = ({ isOpen, onClose }) => {
//   const popupStyle = {
//     // position: "fixed",
//     // top: "10%", // Adjust as needed
//     // left: "50%",
//     // transform: "translate(-50%, 0)",
//     alignItems: 'center',
//     justifyContent: 'center',
//     display:'flex',
//     padding: "20px",
//     borderRadius: "8px",

//     zIndex: 1000,
//     maxWidth: "90%", // Adjust to ensure it doesn't overflow
//     textAlign: "center",
//   };


//   const popupRef = useRef(null);

//   // Handle clicks outside of the popup
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       // If the popup is open and the click target is outside the popup or if the clicked element has the 'add-popo-go' class, close it
//       if (
//         isOpen &&
//         popupRef.current &&
//         (!popupRef.current.contains(event.target) ||
//           event.target.classList.contains('go-pop-up'))
//       ) {
//         onClose();
//       }
//     };

//     // Attach event listener
//     document.addEventListener('mousedown', handleClickOutside);

//     // Cleanup event listener on component unmount
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen, onClose]);

//   // If the popup is not open, don't render it
//   if (!isOpen) return null;





//   return (
//     <div className="add-popo-go">
//     <section class="popup-section"  ref={popupRef}>
// <div class="containers">
//     <div className="go-pop-up">
//     <div class="main-popup">
//     <h1 class="heading">+Add My Listing</h1>
       
//         <p>
//           Are you looking to sell an item that doesn’t quite work for you? List
//           it here!
//         </p>

//         <div className="input-boxes1">
//           <h3>What brand is the item?*</h3>
//           <input type="text" placeholder="Sezane" />
//         </div>

//         <div className="input-boxes1">
//           <h3>What’s the product name?*</h3>
//           <input type="text" placeholder="e.g. Pippa Short Dress" />
//         </div>

//         <div className="input-boxes1">
//           <h3>What color is the product?*</h3>
//           <input type="text" placeholder="e.g. Black with white polka dots" />
//         </div>

//         <div className="input-boxes1">
//           <h3>What size is the product?*</h3>
//           <input type="text" placeholder="e.g. Size 10" />
//         </div>

//         <div className="input-boxes1">
//           <h3>Tell us about your item*</h3>
//           <input
//             type="text"
//             placeholder="New With Tags, New Without Tags, Gently Used (2-5 wears), Well Loved (5+ wears)"
//           />
//         </div>

//         <div className="input-boxes1">
//           <h3>What’s your offer price?*</h3>
//           <input type="text" placeholder="e.g. $100" />
//         </div>

//         <div className="input-boxes1">
//           <h3>tell us about your item*</h3>
//           <textarea
//             name="additionalDetails"
//             placeholder="Provide more details about the item"
//           ></textarea>
//         </div>

//         <div className="input-boxes-2">
//           <p>About you</p>

//           <div className="label-box">
//             <div className="label-3">
//               <label htmlFor="firstName">First Name</label>
//               <input type="text" id="firstName" />
//             </div>
//             <div className="label-3">
//               <label htmlFor="lastName">Last Name</label>
//               <input type="text" id="lastName" />
//             </div>
//           </div>

//           <h3>Address (where you’re shipping from)</h3>

//           <div className="input-3">
//             <input type="text" placeholder="Line 1" />
//             <input type="text" placeholder="Line 2" />
//           </div>

//           <div className="label-box">
//             <div className="label-3">
//               <input type="text" placeholder="State" />
//             </div>
//             <div className="label-3">
//               <input type="text" placeholder="Zip Code" />
//             </div>
//             <div className="label-3">
//               <input type="text" placeholder="Country" />
//             </div>
//           </div>
//         </div>

//         <div className="input-boxes1">
//           <h3>Email</h3>
//           <input type="text" placeholder="Your email address" />
//         </div>

//         <div className="input-boxes1">
//           <h3>Create password</h3>
//           <input type="password" placeholder="Create a password" />
//         </div>

//         <h6>
//           We will create an account where you can track your listings.
//         </h6>

//         <div className="two-images">
//           <h5>Payment (how you’ll get paid)</h5>
//           <div className="two-main-images">
//             <div className="img-paypal">
//                 <img src={Venom} alt="Venom" />
//             </div>
//             <div className="img-paypal">
//             <img src={Paypal} alt="paypal" />
//             </div>
//           </div>
//         </div>

//         <div className="ul-li-review">
//           <div className="check-box-logo">
//             <input type="checkbox" name="Checkbox" id="" />
//           </div>
//           <h4>
//             I agree to the small print outlined in the terms & conditions.
//           </h4>
//         </div>

      


//         <div class="btn-div-popup">
//                         <button class="btn-Add-Wish">Add Listing</button>
//                     </div>
//       </div>
//       </div>
//         </div>
//     </section>
//         </div>
    
       
//   );
// };

// export default AddMyListings;












import React, { useEffect, useRef, useState } from "react";
import Venom from '../../assets/Images/hello1.png';
import Paypal from '../../assets/Images/hello2.png';
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { addlisting } from "../../Redux/Features/addListingSlice";
 
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { cloudinaryUpload } from "../../cloudinaryUpload/cloudinaryUpload";
const AddMyListings = ({ isOpen, onClose ,brand}) => {


  const MySwal = withReactContent(Swal);

const showAlert = (p,error,s) => {
  MySwal.fire({
    title: p,
    text: error,
    icon: s,
    timer: 3000, // 3 seconds
    timerProgressBar: true, // Shows a progress bar
    showConfirmButton: false, // Hides the confirm button
    background: '#232B2B', // Set background color to black
    color: '#fff', 
  });
};



  const [formData, setFormData] = useState({
    brand: brand,
    productName: "",
    color: "",
    size: "",
    itemDescription: "",
    offerPrice: "",
    additionalDetails: "",
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    state: "",
    zipCode: "",
    country: "",
    email: "",
    password: "",
    termsAccepted: false,
    pictures: [],
    bankTitle:"",
    Iban:""
  });

  const [images,setimages]=useState([])

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

  const popupRef = useRef(null);
  const dispatch = useDispatch()

  // Handle clicks outside of the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && popupRef.current && !popupRef.current.contains(event.target) ||
              event.target.classList.contains('go-pop-up')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

  

    console.log("TS")
    
    // Handle form submission
   

    if(!formData.termsAccepted)


    {
     
      toast.error("Please Accept Terms & Conditions")
    }

    else {
      console.log(formData);
      
      const resultAction = await dispatch(addlisting(formData))



      if(resultAction)
        {
          console.log(resultAction.payload,"REVIEW POSTED")
  

          if(resultAction.payload.message=="User Already Created")
            {
              toast.success("Listing Added Successfully")
            }


         else if(resultAction.payload.error)
            {
              toast.error(resultAction.payload.message)
            }    
            


            else if (resultAction.payload.message=="Listing Added Successfully"){
              toast.success(resultAction.payload.message)
                
            }
  
        }
    }


  };

  if (!isOpen) return null;

  
  

  return (
    <div className="add-popo-go">
      <ToastContainer position="bottom-center"/>
      <section className="popup-section" ref={popupRef}>
        <div className="containers">
          <div className="go-pop-up">
            <div className="main-popup">
              <h1 className="heading">+Add My Listing</h1>

              <p>
                Are you looking to sell an item that doesn’t quite work for you? List it here!
              </p>

              <form onSubmit={handleSubmit}>
                <div className="input-boxes1">
                  <h3>What brand is the item?*</h3>
                  {/* <input 
                    type="text" 
                    name="brand" 
                    value={formData.brand} 
                    onChange={handleChange} 
                    placeholder="Sezane" 
                  /> */}


<h3 style={{fontWeight:'500'}}>    {brand}</h3>
              
                </div>

                <div className="input-boxes1">
                  <h3>What’s the product name?*</h3>
                  <input 
                    type="text" 
                    name="productName" 
                    value={formData.productName} 
                    onChange={handleChange} 
                    placeholder="e.g. Pippa Short Dress" 
                  />
                </div>

                <div className="input-boxes1">
                  <h3>What color is the product?*</h3>
                  <input 
                    type="text" 
                    name="color" 
                    value={formData.color} 
                    onChange={handleChange} 
                    placeholder="e.g. Black with white polka dots" 
                  />
                </div>

                <div className="input-boxes1">
                  <h3>What size is the product?*</h3>
                  <input 
                    type="text" 
                    name="size" 
                    value={formData.size} 
                    onChange={handleChange} 
                    placeholder="e.g. Size 10" 
                  />
                </div>

                <div className="input-boxes1">
                  <h3>Tell us about your item*</h3>
                  <input 
                    type="text" 
                    name="itemDescription" 
                    value={formData.itemDescription} 
                    onChange={handleChange} 
                    placeholder="New With Tags, New Without Tags, Gently Used (2-5 wears), Well Loved (5+ wears)" 
                  />
                </div>

                <div className="input-boxes1">
                  <h3>What’s your offer price?*</h3>
                  <input 
                    type="number" 
                    name="offerPrice" 
                    value={formData.offerPrice} 
                    onChange={handleChange} 
                    placeholder="e.g. $100" 
                  />
                </div>



                <div className= "input-boxes1">
              <h3>share some pics*</h3>
              <div className="click-add-img" style={{backgroundColor:'transparent'}}> 
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




                <div className="input-boxes1">
                  <h3>Tell us about your item*</h3>
                  <textarea 
                    name="additionalDetails" 
                    value={formData.additionalDetails} 
                    onChange={handleChange} 
                    placeholder="Provide more details about the item" 
                  />
                </div>

                <div className="input-boxes-2">
                  <p>About you</p>

                  <div className="label-box">
                    <div className="label-3">
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="label-3">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>

                  <h3>Address (where you’re shipping from)</h3>

                  <div className="input-3">
                    <input 
                      type="text" 
                      name="addressLine1" 
                      value={formData.addressLine1} 
                      onChange={handleChange} 
                      placeholder="Line 1" 
                    />
                    <input 
                      type="text" 
                      name="addressLine2" 
                      value={formData.addressLine2} 
                      onChange={handleChange} 
                      placeholder="Line 2" 
                    />
                  </div>

                  <div className="label-box">
                    <div className="label-3">
                      <input 
                        type="text" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange} 
                        placeholder="State" 
                      />
                    </div>
                    <div className="label-3">
                      <input 
                        type="text" 
                        name="zipCode" 
                        value={formData.zipCode} 
                        onChange={handleChange} 
                        placeholder="Zip Code" 
                      />
                    </div>
                    <div className="label-3">
                      <input 
                        type="text" 
                        name="country" 
                        value={formData.country} 
                        onChange={handleChange} 
                        placeholder="Country" 
                      />
                    </div>
                  </div>
                </div>


                <div className="input-boxes1">
                  <h3>Bank Details</h3>
                  <input 
                    type="bankTitle" 
                    name="bankTitle" 
                    value={formData.bankTitle} 
                    onChange={handleChange} 
                    placeholder="Title" 
                  />


                  
                </div>


                <div className="input-boxes1" style={{paddingTop:'10%'}}>
                
                  <input 
                    type="iban" 
                    name="Iban" 
                    value={formData.Iban} 
                    onChange={handleChange} 
                    placeholder="Iban" 
                  />


                  
                </div>



                <div className="input-boxes1">
                  <h3>Email</h3>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Your email address" 
                  />
                </div>

                <div className="input-boxes1">
                  <h3>Create password</h3>
                  <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Create a password" 
                  />
                </div>

                <h6>We will create an account where you can track your listings.</h6>

                <div className="two-images">
                  <h5>Payment (how you’ll get paid)</h5>
                  <div className="two-main-images">
                    <div className="img-paypal">
                      <img src={Venom} alt="Venom" />
                    </div>
                    <div className="img-paypal">
                      <img src={Paypal} alt="Paypal" />
                    </div>
                  </div>
                </div>

                <div className="ul-li-review">
                  <div className="check-box-logo">
                    <input 
                      type="checkbox" 
                      name="termsAccepted" 
                      checked={formData.termsAccepted} 
                      onChange={handleChange} 
                    />
                  </div>
                  <h4>I agree to the small print outlined in the terms & conditions.</h4>
                </div>

                <div className="btn-div-popup">
                  <button type="submit" className="btn-Add-Wish">Add Listing</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMyListings;
