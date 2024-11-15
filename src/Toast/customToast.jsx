import React from "react";
import { toast, ToastContainer } from "react-toastify";

  const CustomToast=(type,message)=>{


   if(type==="error")
    {
        toast.error(message)
    } 
    else if(type==="success")
    {
        toast.success(message)
    }



    return(

<div>

<ToastContainer position="bottom-center"/>



</div>


    )



}

export default CustomToast