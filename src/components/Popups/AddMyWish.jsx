// import React, { useEffect, useRef } from "react";
// const AddMyWish = ({ isOpen, onClose })=>{
//     const popupStyle = {
//         position: 'absolute',

        
//       };


//       const popupRef = useRef(null);

//       // Handle clicks outside of the popup
//       useEffect(() => {
//         const handleClickOutside = (event) => {
//           // If the popup is open and the click target is outside the popup or if the clicked element has the 'add-popo-go' class, close it
//           if (
//             isOpen &&
//             popupRef.current &&
//             (!popupRef.current.contains(event.target) ||
//               event.target.classList.contains('go-pop-up'))
//           ) {
//             onClose();
//           }
//         };
    
//         // Attach event listener
//         document.addEventListener('mousedown', handleClickOutside);
    
//         // Cleanup event listener on component unmount
//         return () => {
//           document.removeEventListener('mousedown', handleClickOutside);
//         };
//       }, [isOpen, onClose]);
    
//       // If the popup is not open, don't render it
//       if (!isOpen) return null;




//     return (
//         <div className="add-popo-go">
//             <section class="popup-section" ref={popupRef}>
//         <div class="containers">
//             <div className="go-pop-up">
//             <div class="main-popup">
//                 <div class="heading-main">
//                     <h1 class="heading">+Add My Wish</h1>
//                 </div>
//                 <div class="para-main">
//                     <p class="para">are you on the hunt for a specific product? fill out this form and maybe we can find you a match!</p>
//                 </div>
//                 <div class="main-inputs-sec">
//                     <div class="in-sec">
//                         <h3 class="h3">what brand are you looking to buy from?*</h3>
//                         <input placeholder="Sezane" class="pop-in-1" type="text"/>
//                     </div>
//                     <div class="in-sec">
//                         <h3 class="h3">what’s the product name?*</h3>
//                         <input placeholder="e.g. Pippa Short Dress" class="pop-in-1" type="text"/>
//                     </div>
//                     <div class="in-sec">
//                         <h3 class="h3">what color is the product you’re looking for?*</h3>
//                         <input placeholder="e.g. Black with white polka dots" class="pop-in-1" type="text"/>
//                     </div>
//                     <div class="in-sec">
//                         <h3 class="h3">what size are you looking for?*</h3>
//                         <input  placeholder="Sezane" class="pop-in-1" type="text"/>
//                     </div>
//                     <div class="in-sec">
//                         <h3 class="h3">what’s your email?*</h3>
//                         <input placeholder="e.g. shopaholic@gmail.com" class="pop-in-1" type="text"/>
//                     </div>
//                     <div class="in-sec-2">
//                         <h3 class="h3">create a password</h3>
//                         <input placeholder="e.g. shopaholic@gmail.com"  class="pop-in-1" type="text"/>
//                     </div>
//                 </div>
//                   <div class="p-div">
//                         <p class="light-p">we will create an account where you can track your wishes</p>
//                     </div>
//                     <div class="btn-div-popup">
//                         <button class="btn-Add-Wish">Reset Password</button>
//                     </div>
//             </div>
//             </div>
//         </div>
//     </section>
//         </div>
//     )
// }
// export default AddMyWish











import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addWishes } from '../../Redux/Features/addWishesSlice';
import { toast, ToastContainer } from 'react-toastify';

const AddMyWish = ({ isOpen, onClose,brand }) => {
  const [formData, setFormData] = useState({
    brand: brand,
    productName: '',
    color: '',
    size: '',
    email: '',
    password: ''
  });

  const popupRef = useRef(null);

  // Handle clicks outside of the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
        ||
          event.target.classList.contains('go-pop-up')
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const dispatch = useDispatch()

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);

  const resultAction= await   dispatch(addWishes(formData))

  if(resultAction)
    {
      console.log(resultAction.payload,"REVIEW POSTED")


      if(resultAction.payload.message==="User Already Created")
        {
          toast.success("Wish Added Successfully")
          
        }


     else if(resultAction.payload.error)
        {
          toast.error(resultAction.payload.message)
        }    
        


        else if (resultAction.payload.message==="Listing Added Successfully"){
          toast.success(resultAction.payload.message)
          
        
            
        }

    }



  };

 

  if (!isOpen) return null;

  return (
    <div className="add-popo-go">
       
      <section className="popup-section" ref={popupRef}>
        <div className="containers">
          <div className="go-pop-up">
            <div className="main-popup">
              <div className="heading-main">
                <h1 className="heading">+Add My Wish</h1>
              </div>
              <ToastContainer position="bottom-center"/>
              <div className="para-main">
                <p className="para">Are you on the hunt for a specific product? Fill out this form and maybe we can find you a match!</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="main-inputs-sec">
                  <div className="in-sec">
                    <h3 className="h3">What brand are you looking to buy from?*</h3>
                    {/* <input
                      name="brand"
                      placeholder="Sezane"
                      className="pop-in-1"
                      type="text"
                      value={formData.brand}
                      onChange={handleChange}
                    /> */}
                    <h3 className="h3" style={{fontWeight:'600'}}>   {brand}</h3>
                 
                  </div>
                  <div className="in-sec">
                    <h3 className="h3">What’s the product name?*</h3>
                    <input
                      name="productName"
                      placeholder="e.g. Pippa Short Dress"
                      className="pop-in-1"
                      type="text"
                      value={formData.productName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="in-sec">
                    <h3 className="h3">What color is the product you’re looking for?*</h3>
                    <input
                      name="color"
                      placeholder="e.g. Black with white polka dots"
                      className="pop-in-1"
                      type="text"
                      value={formData.color}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="in-sec">
                    <h3 className="h3">What size are you looking for?*</h3>
                    <input
                      name="size"
                      placeholder="e.g. Size 10"
                      className="pop-in-1"
                      type="text"
                      value={formData.size}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="in-sec">
                    <h3 className="h3">What’s your email?*</h3>
                    <input
                      name="email"
                      placeholder="e.g. shopaholic@gmail.com"
                      className="pop-in-1"
                      type="text"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="in-sec-2">
                    <h3 className="h3">Create a password</h3>
                    <input
                      name="password"
                      placeholder="e.g. Password"
                      className="pop-in-1"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="p-div">
                  <p className="light-p">We will create an account where you can track your wishes</p>
                </div>
                <div className="btn-div-popup">
                  <button type="submit" className="btn-Add-Wish">Submit Wish</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMyWish;
