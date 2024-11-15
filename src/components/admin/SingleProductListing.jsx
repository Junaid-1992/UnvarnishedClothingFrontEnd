import React, { useEffect, useState } from "react";


import pp1 from "../../assets/Images/Screenshot 2024-08-29 165938.png"
import pp2 from "../../assets/Images/image 59.png"
import pp3 from "../../assets/Images/image 60.png"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getsinglelistingproduct, updatelisting } from "../../Redux/Features/addListingSlice";
import { SingleOrder, updateorder } from "../../Redux/Features/addOrderSlice";
import WithdrawPayout from "../../Paypal/Withdraw";
const SingleProductListing=()=>{

  const {id}=useParams()
  const dispatch = useDispatch()





 
  const [isEditingProduct, setIsEditingProduct] = useState(false);
  const [editableReviewProduct, setEditableReviewProduct] = useState({
    _id:'',
    email: '',
    brand: '',
    productName: '',
    color: '',
    size: '',
    itemDescription: '',
    offerPrice: '',
    pictures: [],
  });


  useEffect(()=>{
    
    dispatch(SingleOrder(id))
    dispatch(getsinglelistingproduct(id))
  },[])

  const Product = useSelector((state)=>state.addlisting.singleListingProduct)

  
const Order = useSelector((state)=>state.addorder.singleOrderDetails)


  useEffect(()=>{

    if(Product)
    {
      setEditableReviewProduct({
        _id:Product._id,
        email: Product.email || '',
        brand: Product.brand || '',
        productName: Product.productName || '',
        color: Product.color || '',
        size: Product.size || '',
        itemDescription: Product.itemDescription || '',
        offerPrice: Product.offerPrice || '',
        pictures: Product.pictures || [],
      });


    }

  },[Product])



  const [isEditingOrder, setIsEditingOrder] = useState(false);
  const [editableOrder, setEditableOrder] = useState({
    _id:'',
    email: '',
    trackingId: '',
    trackingStatus: '',
    addressLine1: '',
    addressLine2: '',
     
  });
  
  
  useEffect(()=>{
  
    if(Order)
    {
      setEditableOrder({
        _id:Order._id,
        email: Order.email || '',
        trackingId:Order.trackingId || '',
        trackingStatus:Order.trackingStatus || '',
        addressLine1:Order.addressLine1 || '',
        addressLine2:Order.addressLine2 || ''
      });
  
  
    }
  
  },[Order])



   
  const handleInputChangeProduct = (e) => {
    const { name, value } = e.target;
    setEditableReviewProduct({
      ...editableReviewProduct,
      [name]: value,
    });
  };

  
  
  const handleSaveProduct = () => {
    
   setIsEditingProduct(false);
   
 
   handleSaveOrder()

 


   dispatch(updatelisting(editableReviewProduct))

  if(editableOrder._id!='')
  {
    dispatch(updateorder(editableOrder))
  } 

 };
 
 const handleEditProduct = () => {
   setIsEditingProduct(true);

   handleEditOrder()
 };







 
const handleInputChangeOrder = (e) => {
  const { name, value } = e.target;
  setEditableOrder({
    ...editableOrder,
    [name]: value,
  });
};


 
const handleSaveOrder = () => {
  
 setIsEditingOrder(false);
 


};

 
const handleEditOrder = () => {
 setIsEditingOrder(true);
};


// 



    return (

        <>

<div className="main-ab">
        <div className="main-listing-1 more-shar1">

          <div className="more-shar2">
<div className="gol-kol">
<h1>Listing #1</h1>
{
  isEditingProduct? (<>
  
  <h1>
  Price: $
                        <input
                          type="text"
                          name="offerPrice"
                          value={editableReviewProduct.offerPrice}
                          onChange={handleInputChangeProduct}
                        />
                      </h1>
  </>):(<h1>Price: ${editableReviewProduct?.offerPrice}</h1>)
}

</div>
          


            <div className="inner-con-1-main-c-listing-2-c-1">
                <select name="" id="">
                  <option value="">Active</option>
                  <option value="">Active</option>
                  <option value="">Active</option>
                  <option value="">Active</option>
                </select>
              </div>

            <div className="hello-shai" >
              <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>

        {
          !isEditingProduct &&
          <h1 onClick={()=>handleEditProduct()}>EDIT</h1>

        }
            {
              isEditingProduct &&
              <h1 onClick={()=>handleSaveProduct()}>SAVE</h1>
            }
            
              <h1>
              |
              </h1>
              <h1>
               MAKE INACTIVE
              </h1>

              </div>
              
              <h2>August 7, 2024 7:05AM</h2>
            </div>

          </div>

          <div className="box-shair">
            <div className="uk-old-div-box">
              <div className="uk-old-div">
                <h3>PRODUCT DETAILS</h3>
                <div className="ul-div">
                  <ul>

                  {isEditingProduct ? (
                    <>
                      
                      <li>
                        Brand:{" "}
                        <input
                          type="text"
                          name="brand"
                          value={editableReviewProduct.brand}
                          onChange={handleInputChangeProduct}
                        />
                      </li>
                      <li>
                        Product:{" "}
                        <input
                          type="text"
                          name="productName"
                          value={editableReviewProduct.productName}
                          onChange={handleInputChangeProduct}
                        />
                      </li>
                      <li>
                        Color:{" "}
                        <input
                          type="text"
                          name="color"
                          value={editableReviewProduct.color}
                          onChange={handleInputChangeProduct}
                        />
                      </li>
                      <li>
                        Size:{" "}
                        <input
                          type="text"
                          name="size"
                          value={editableReviewProduct.size}
                          onChange={handleInputChangeProduct}
                        />
                      </li>
                      <li>
                        Condition:{" "}
                        <input
                          type="text"
                          name="itemDescription"
                          value={editableReviewProduct.itemDescription}
                          onChange={handleInputChangeProduct}
                        />
                      </li>
                    </>
                  ) :(
                    <>
                    
                    <li><span>Brand:</span> {editableReviewProduct?.brand}</li>
                    <li><span>Product:</span> {editableReviewProduct?.productName}</li>
                    <li><span>Color:</span> {editableReviewProduct?.color}</li>
                    <li><span>Size:</span> {editableReviewProduct?.size}</li>
                    <li><span>Condition:</span> {editableReviewProduct?.itemDescription}</li>
                    </>
                  )}
                  </ul>
                </div>
              </div>
              <div className="uk-old-div">
                <h3>SELLER DETAILS</h3>
                <div className="ul-div">
                  <ul>
                  <li><span>Seller email:</span>  {Product?.email}</li>
                  <li><span>Seller Bank Title:</span>  {Product?.bankTitle}</li>
                  <li><span>Seller Iban:</span>  {Product?.Iban}</li>
                    {/* <li><span>Seller Payment Method:</span>  Venmo</li> */}
                    <li><span>payout:</span> ${Product?.offerPrice}</li>
                    <li><span>payout status:</span> paid on July 15, 2024 8:10AM</li>
                    <li><span>seller address:</span> {Product?.addressLine1} {Product?.addressLine2}</li>

                  </ul>
                </div>
              </div>
            </div>

            <div className="uk-new-div-box">
            <h3>Product description</h3>

              {/* <div className="ul-div">
                <ul>
                  <li className="extra-class-li"><span>Description:</span> Very feminine shirt. Worn twice. Runs true to size although the sleeves are a little short. 
                  </li>
            
        
                </ul>
              </div> */}
      <div className="new-old-imger-box">

        {
          Product?.pictures.map((e,i)=>(

            <div className="new-old-imger" key={i}>
            <img src={e} alt="" />
            </div>


          ))
        }
             
 

              </div>
            
              <div className="ul-div">
                  <ul className="go-pad">
                
                    <li><span>Description:</span>  {editableReviewProduct?.itemDescription}</li>
             
                 
                  </ul>
                </div>

            <div className="uk-old-div">
            <h3>ORDER DETAILS</h3>
                <div className="ul-div">
                <ul>

                <li><span>order date:</span> July 10, 2024 7:10am</li>
                <li><span>order #:</span>  {Order?.payment_details.id}</li>
                </ul>
              {
                isEditingOrder? (<>
            <ul>

            <li>
                        Buyer email:{" "}
                        <input
                          type="text"
                          name="email"
                          value={editableOrder.email}
                          onChange={handleInputChangeOrder}
                        />
                      </li>

                      <li>
                        Tracking ID for Shipping:{" "}
                        <input
                          type="text"
                          name="trackingId"
                          value={editableOrder.trackingId}
                          onChange={handleInputChangeOrder}
                        />
                      </li>


                      <li>
                      trackingStatus:{" "}
                        <input
                          type="text"
                          name="trackingStatus"
                          value={editableOrder.trackingStatus}
                          onChange={handleInputChangeOrder}
                        />
                      </li>


                      <li>
                      address Line 1:{" "}
                        <input
                          type="text"
                          name="addressLine1"
                          value={editableOrder.addressLine1}
                          onChange={handleInputChangeOrder}
                        />
                      </li>



                      <li>
                      address Line2{" "}
                        <input
                          type="text"
                          name="addressLine2"
                          value={editableOrder.addressLine2}
                          onChange={handleInputChangeOrder}
                        />
                      </li>

            </ul>
                   



                
                </>):(<>
                  <ul>
                
              
                <li><span>Buyer email:</span>  {editableOrder?.email}</li>
                <li><span>Tracking:</span>{editableOrder?.trackingId}</li>
                <li><span>Status:</span> {editableOrder?.trackingStatus}</li>
                <li><span>Buyer address:</span> -</li>
                <li><span> Address Line 1:</span> {editableOrder?.addressLine1}  </li>
                <li><span> Address Line 2:</span>  {editableOrder?.addressLine2}</li>




              </ul>
                </>)

              }
           

                  
                </div>
            </div>
            </div>
          </div>

        </div>
      </div>

<WithdrawPayout/>
        
        </>


    )



}

export default SingleProductListing