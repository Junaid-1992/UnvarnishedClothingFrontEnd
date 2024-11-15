import React, { useEffect } from "react";

import delet from "../../assets/Images/delete 1.png"
import email from "../../assets/Images/email.png"

import heil from "../../assets/Images/heil.png"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allOrders } from "../../Redux/Features/addOrderSlice";
const OrdersA=()=>{

  const navigate = useNavigate()
  const handleNavigate=(id)=>{

    console.log("Hit")

    navigate(`admin-single-order-details/${id}`)

  }

  const dispatch= useDispatch()

  useEffect(()=>{
    dispatch(allOrders())
  },[])

  const Orders=useSelector((state)=>state.addorder.allOrders)





    return (

        <>

         <div class="main-1">
       <h1 class="h1-1">Orders</h1>
<div class="table-box">
    <table  class="table more-x">
       <thead>
       <tr class="re">
       <td >date</td>
            <td >Email</td>
            <td>brand</td>
            <td>product</td>
            <td>color</td>
            <td>size</td>
            <td>Condition</td>
            <td>Price</td>
            <td>Status</td>
        </tr>
       </thead>
    <tbody>


      {
        Orders?.map((e,i)=>(



    <tr key={i}>

         
            <td>7/14/2024</td>
            <td>{e?.email}</td>
            <td> {e?.productDetails?.brand}</td>
            <td>{e?.productDetails?.productName}</td>
            <td>{e?.productDetails?.color}</td>
            <td>{e?.productDetails?.size}</td>
            <td>{e?.productDetails?.itemDescription}</td>
            <td>${e?.productDetails?.offerPrice}</td>

          <td className="flex-item">
            <button className="rumbo">In transit</button>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" onClick={()=>handleNavigate(e?.productDetails?._id)}>
  <path d="M6.5 3C6.5 2.60218 6.65804 2.22064 6.93934 1.93934C7.22064 1.65804 7.60218 1.5 8 1.5C8.39782 1.5 8.77936 1.65804 9.06066 1.93934C9.34196 2.22064 9.5 2.60218 9.5 3C9.5 3.39782 9.34196 3.77936 9.06066 4.06066C8.77936 4.34196 8.39782 4.5 8 4.5C7.60218 4.5 7.22064 4.34196 6.93934 4.06066C6.65803 3.77936 6.5 3.39782 6.5 3ZM6.5 8C6.5 7.60218 6.65803 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5C7.60217 9.5 7.22064 9.34196 6.93934 9.06066C6.65803 8.77936 6.5 8.39782 6.5 8ZM6.5 13C6.5 12.6022 6.65803 12.2206 6.93934 11.9393C7.22064 11.658 7.60217 11.5 8 11.5C8.39782 11.5 8.77936 11.658 9.06066 11.9393C9.34196 12.2206 9.5 12.6022 9.5 13C9.5 13.3978 9.34196 13.7794 9.06066 14.0607C8.77936 14.342 8.39782 14.5 8 14.5C7.60217 14.5 7.22064 14.342 6.93934 14.0607C6.65803 13.7794 6.5 13.3978 6.5 13Z" fill="black"/>
</svg>
          </td>

        </tr>


        ))

      }





 

    </tbody>
    </table>
</div>
        </div>
        
        </>


    )



}

export default OrdersA