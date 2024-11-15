import React from "react";

import delet from "../../assets/Images/delete 1.png"
import email from "../../assets/Images/email.png"

import heil from "../../assets/Images/heil.png"
import { useSelector } from "react-redux";
const Dashz=()=>{

    
    const Wishes= useSelector((state)=>state.addwishes.allWishes)
   

    return (

        <>

         <div class="main-3">
       <h1 class="h1-1">Wishes</h1>
<div class="table-box">
    <table  class="table more-x">
       <thead>
       <tr class="re">

            <td >Email</td>
            <td>date</td>
            <td>brand</td>
            <td>product</td>
            <td>color</td>
            <td>size</td>
            <td>Status</td>
  

            <td></td>
        </tr>
       </thead>
    <tbody>

        {

            Wishes?.map((e,i)=>(

                <tr key={i}>

         
         
                <td> {e?.email}</td>
                <td> 7/14/24</td>
                <td>{e?.brand}</td>
                <td>{e?.productName}</td>
                <td>{e?.color}</td>
                <td>{e?.size}</td>
          
       <td>
        <button className="Active">Active</button>
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

export default Dashz