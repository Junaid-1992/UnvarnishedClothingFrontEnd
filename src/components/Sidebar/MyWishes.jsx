import React, { useEffect } from "react";

import delet from "../../assets/Images/delete 1.png"
import { useDispatch, useSelector } from "react-redux";
import { deleteWish, getuserWishes } from "../../Redux/Features/addWishesSlice";
import { toast, ToastContainer } from "react-toastify";

const MyWishes=()=>{

    const dispatch = useDispatch()

const email= localStorage.getItem("User_Data")
console.log(email,"session")
const Wishes= useSelector((state)=>state.addwishes.userWishes)

const deleteStatus = useSelector((state) => state.addwishes.delete_Wish);


useEffect(()=>{

  dispatch(getuserWishes(email))

},[email])

useEffect(() => {
    if (deleteStatus === 'Wish Deleted Successfully') {
      
      dispatch(getuserWishes(email)); // Refresh wishes list after deletion
    } else if (deleteStatus === 'failed') {
      toast.error('Failed to delete wish');
    }
  }, [deleteStatus, dispatch, email]);



console.log(Wishes,"WISES ")

const handleDeleteWish=async(p)=>{

    dispatch(deleteWish(p))

     
   

    

}




    return (

        <>
        <ToastContainer position="bottom-center"/>

         <div class="main-1">
       <h1 class="h1-1">My  Wishes</h1>
<div class="table-box">
    <table  class="table">
       <thead>
       <tr class="re">
            <td >DATE</td>
            <td>BRAND</td>
            <td>PRODUCT NAME</td>
            <td>COLOR</td>
            <td>SIZE</td>
            <td></td>
        </tr>
       </thead>
    <tbody>
        {
            Wishes?.map((e,i)=>(


                        <tr key={i}>
                                <td>Jun 2024</td>
                                <td>{e?.brand}</td>
                                <td>{e?.productName}</td>
                                <td>{e?.color}</td>
                                <td>{e?.size}</td>
                                <td onClick={()=>handleDeleteWish(e._id)}>
                                    <img src={delet} alt="" />
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

export default MyWishes