// import React from 'react';
// // import hello from "/assets/Images/image 55.png";
// import hello from "../../assets/Images/hello1.png";

// import  hello2 from "../../assets/Images/hello2.png";
// import Paypal from '../../Paypal/Paypal';
// import { useSelector } from 'react-redux';
// function MainSection() {
   
   
   
    
//   const Product = useSelector((state)=>state.addlisting.singleListingProduct)
   
   
//     return (

//         <>
        
//         <section className="hero-paralix">
//         <div class="container">
//             <main className="main--ar">
//                 <div className="cart-div--ar">
//                     <h1 style={{ paddingLeft: '10px' }}>Cart</h1>

//                     <div className="cart-items--ar">
//                         <div className="item--ar">
//                             <div className="img-div--ar">
//                                 <img
//                                     src="https://s3-alpha-sig.figma.com/img/ca74/75bb/552855457769af4a615d70cc1411cd38?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VCEfVGPZtkMnWbMTllww~ummijieSEW7iPWmVjvGG3JQq93A4qX3jFko1EGo7CbtSfn5VLVWfR4EdCg2WxfYyoD9VdzUE662RCi4-akKjAPsgx0QwEC73SRBmGKbYWi9tc0IvCcyofWjy-rlFRDwGM9MG-06p-qpbSZFUwHkvLI1kQEuABRtJkG03eAt0KQ-ecnwNT4Z2BySA6Mg--mlHn4y29-OTm9VfGeaIYDh7kKQ4CJH1w5xA1cCy~EBkS7Kif3sqXFlKlreETu6dk9gWkAvyaWCcF0V~ZARaYnYqDojNz5A7xBsWNtemM9J5FtKsBZpuU1cqp8WISuvhTuiMQ__"
//                                     alt=""
//                                 />
//                             </div>

//                             <div className="cart-content--ar">
//                                 <h1>{Product?.brand}</h1>
//                                 <p>{Product?.productName}, {Product?.color}</p>
//                                 <p>NWT, {Product?.size}</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="pricing--ar">
//                         <div className="price--ar">
//                             <p>Price</p>
//                             <p>{Product?.offerPrice}</p>
//                         </div>
//                         <div className="tax--ar">
//                             <p>Tax</p>
//                             <p>0</p>
//                         </div>
//                         <div className="total--ar">
//                             <p>Total</p>
//                             <p>{Product?.offerPrice}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="checkout-div--ar">
//                     <h1>Checkout</h1>
//                     <form>
//                         <div className="name--ar">
//                             <div className='heelo11'>
//                                 <label htmlFor="name">First Name</label>
//                                 <input className="input--ar" type="text" />
//                             </div>
//                             <div className='heelo11'>
//                                 <label htmlFor="name">Last Name</label>
//                                 <input className="input--ar" type="text" />
//                             </div>
//                         </div>
//                         <div className="address--ar">
//                             <label htmlFor="name">Address</label>
//                             <input className="input--ar" type="text" placeholder="Line1" />
//                             <input className="input--ar" type="text" placeholder="Line2" />

//                             <div className="location--ar">
//                                 <input className="input--ar" type="text" placeholder="State" />
//                                 <input className="input--ar" type="text" placeholder="Zip Code" />
//                             </div>
//                             <div className="country--ar">
//                                 <input className="input--ar" type="text" placeholder="Country" />
//                             </div>
//                         </div>

//                         <div className="payment--ar">
//                             <p>Payment</p>
//                             <div className='hello-more-box'>
//                             <div className='hello-img'>
//                                 <img src={hello} alt="" />
//                             </div>

//                             <div className='hello-img-1'>
//                                 <img src={hello2 }alt="" />
//                             </div>

//                             </div>
//                         </div>

//                         <div className="credit--ar">
//                             <label>Debit/Credit Card</label>
//                             <div>
//                                 <input className="input--ar" placeholder="Line1" type="text" />
//                             </div>
//                             <div className="expire--ar">
//                                 <input className="input--ar" placeholder="Expiration Date" type="text" />
//                                 <input className="input--ar" placeholder="CVC Code" type="text" />
//                             </div>
//                             <div className="zipcode--ar">
//                                 <input className="input--ar" placeholder="Zip Code" type="text" />
//                             </div>
//                         </div>

                     

//                         <div className="login--ar">
//                             <div className="gap--ar">
//                                 <label htmlFor="email">Email</label>
//                                 <input className="input--ar" type="email" />
//                             </div>
//                             <div className="gap--ar">
//                                 <label htmlFor="email">Create Password</label>
//                                 <input className="input--ar" type="password" />
//                             </div>
//                             <p className="italic--ar">we will create an account where you can track your order</p>

//                             <div className="checkbox--ar">
//                                 <input type="checkbox" />
//                                 <p>i agree to the small print outlined in the terms & conditions</p>
//                             </div>

//                             <button className="btn--ar">Purchase</button>
//                         </div>
//                     </form>
//                 </div>
//             </main>
        
        
//             </div>
//         </section>
//         </>
//     );
// }

// export default MainSection;








import React, { useEffect, useRef, useState } from 'react';
import hello from "../../assets/Images/hello1.png";
import hello2 from "../../assets/Images/hello2.png";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getsinglelistingproduct } from '../../Redux/Features/addListingSlice';
import Paypal from '../../Paypal/Paypal';
import { toast, ToastContainer } from 'react-toastify';
import { addOrder } from '../../Redux/Features/addOrderSlice';

function MainSection() {

    const formRef = useRef(null);
    const {id}=useParams()
    const dispatch = useDispatch()
    const navigate= useNavigate()
    const [pd,setpd]=useState('')
  
    useEffect(()=>{
      
   const action=   dispatch(getsinglelistingproduct(id))
   console.log(action,"actioj")
    },[])

    const Product = useSelector((state) => state.addlisting.singleListingProduct);
    const [status,setstatus]=useState(false)

    const [formData, setFormData] = useState({
        productDetails:'',
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        state: '',
        zipCode: '',
        country: '',
        email: '',
        password: '',
        payment_details:'',
       
        
        
        
        agreeToTerms: false,
        paymentStatus:status
    });
    const [isFormComplete, setIsFormComplete] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
        validateForm();
    };
  


    const validateForm = () => {
        // List of required fields
        const requiredFields = [
            'firstName', 
            'lastName', 
            'addressLine1', 
            'state', 
            'zipCode', 
            'country', 
            'email', 
            'password', 
           
        ];
        // Check if all required fields are filled
        const allFieldsFilled = requiredFields.every(field => formData[field].trim() !== '');
        // Check if terms are agreed
        const agreeToTerms = formData.agreeToTerms;
        // Form is complete if all fields are filled and terms are agreed
        const isComplete = allFieldsFilled && agreeToTerms;

       if(allFieldsFilled)
       {
        return allFieldsFilled
       }

        // Debugging logs
        console.log('Form Data:', formData);
        console.log('All Fields Filled:', allFieldsFilled);
        console.log('Agree to Terms:', agreeToTerms);
        console.log('Form Complete:', isComplete);
    };
   

    useEffect(()=>{
        console.log(isFormComplete,"TS")
    },[isFormComplete])

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process formData or send it to the server
        console.log(e,'Form data submitted: TS', formData);
    };


    const submitForm = (data) => {
        console.log('Submitting form with data:', data);

        dispatch(addOrder(data))
        
    };


    const handlepaymentcallback=  (p)=>{

        // alert(p)
        toast.success("Payment Successful")
        
        setstatus(true)

        setFormData((prevdata)=>{

        const updated_data =  {     
             ...prevdata,
                payment_details:p,
                productDetails:Product
        }
        submitForm(updated_data)
        setTimeout(() => {
            
            navigate('/')
        }, 2000);
        return updated_data


      

            })

        
        // formRef.current.click()
       
        console.log("payment callback success",formData)

    }






    return (
        <>
            <section className="hero-paralix">
                <ToastContainer position='bottom-center'/>
                <div className="container">
                    <main className="main--ar">
                        <div className="cart-div--ar">
                            <h1 style={{ paddingLeft: '10px' }}>Cart</h1>

                            <div className="cart-items--ar">
                                <div className="item--ar">
                                    <div className="img-div--ar">
                                        <img
                                            src={Product?.pictures[0]}
                                            alt=""
                                        />
                                    </div>

                                    <div className="cart-content--ar">
                                        <h1>{Product?.brand}</h1>
                                        <p>{Product?.productName}, {Product?.color}</p>
                                        <p>NWT, {Product?.size}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pricing--ar">
                                <div className="price--ar">
                                    <p>Price</p>
                                    <p>{Product?.offerPrice}</p>
                                </div>
                                <div className="tax--ar">
                                    <p>Tax</p>
                                    <p>0</p>
                                </div>
                                <div className="total--ar">
                                    <p>Total</p>
                                    <p>{Product?.offerPrice}</p>
                                </div>
                            </div>
                        </div>
                        <div className="checkout-div--ar">
                            <h1>Checkout</h1>
                            <form onSubmit={handleSubmit} >
                                <div className="name--ar">
                                    <div className='heelo11'>
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            className="input--ar"
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='heelo11'>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            className="input--ar"
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="address--ar">
                                    <label htmlFor="addressLine1">Address</label>
                                    <input
                                        className="input--ar"
                                        type="text"
                                        name="addressLine1"
                                        placeholder="Line1"
                                        value={formData.addressLine1}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="input--ar"
                                        type="text"
                                        name="addressLine2"
                                        placeholder="Line2"
                                        value={formData.addressLine2}
                                        onChange={handleChange}
                                    />

                                    <div className="location--ar">
                                        <input
                                            className="input--ar"
                                            type="text"
                                            name="state"
                                            placeholder="State"
                                            value={formData.state}
                                            onChange={handleChange}
                                        />
                                        <input
                                            className="input--ar"
                                            type="text"
                                            name="zipCode"
                                            placeholder="Zip Code"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="country--ar">
                                        <input
                                            className="input--ar"
                                            type="text"
                                            name="country"
                                            placeholder="Country"
                                            value={formData.country}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="payment--ar">
                                    <p>Payment</p>
                                    <div className='hello-more-box'>
                                        <div className='hello-img'>
                                            <img src={hello} alt="" />
                                        </div>

                                        <div className='hello-img-1'>
                                            <img src={hello2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="credit--ar">
                                    <label>Debit/Credit Card</label>
                                    {/* <div>
                                        <input
                                            className="input--ar"
                                            name="creditCardNumber"
                                            placeholder="Card Number"
                                            type="text"
                                            value={formData.creditCardNumber}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="expire--ar">
                                        <input
                                            className="input--ar"
                                            name="expirationDate"
                                            placeholder="Expiration Date"
                                            type="text"
                                            value={formData.expirationDate}
                                            onChange={handleChange}
                                        />
                                        <input
                                            className="input--ar"
                                            name="cvcCode"
                                            placeholder="CVC Code"
                                            type="text"
                                            value={formData.cvcCode}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="zipcode--ar">
                                        <input
                                            className="input--ar"
                                            name="cardZipCode"
                                            placeholder="Zip Code"
                                            type="text"
                                            value={formData.cardZipCode}
                                            onChange={handleChange}
                                        />
                                    </div> */}
                                
                                </div>

                                <div className="login--ar">
                                    <div className="gap--ar">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            className="input--ar"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="gap--ar">
                                        <label htmlFor="password">Create Password</label>
                                        <input
                                            className="input--ar"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <p className="italic--ar">We will create an account where you can track your order</p>

                                    <div className="checkbox--ar">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                        />
                                        <p>I agree to the small print outlined in the terms & conditions</p>
                                    </div>
                                    <Paypal price={Product?.offerPrice} productname={Product?.productName} handlepaymentcallback={handlepaymentcallback} isFormComplete={validateForm()}/>
                                    {/* <button className="btn--ar" type="submit" ref={formRef}>Purchase</button> */}
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}

export default MainSection;

