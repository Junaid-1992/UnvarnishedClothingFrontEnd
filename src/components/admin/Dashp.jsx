import React from "react";

import delet from "../../assets/Images/delete 1.png"
import email from "../../assets/Images/email.png"

import heil from "../../assets/Images/heil.png"
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../Redux/Features/addreviewSlice";
import { useNavigate } from "react-router-dom";
const Dashp=({fetch})=>{

  const reviews=useSelector((state)=>state.addreview.allReviews)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavigate=(id)=>{

    console.log("Hit")

    navigate(`admindashboard/admin-single-review-details/${id}`)

  }
 


  const delete_review=(id)=>{

    console.log(id)

    dispatch(deleteReview(id))
    fetch(true)

  }


    return (

        <>

         <div class="main-3">
       <h1 class="h1-1">Reviews</h1>
<div class="table-box">
    <table  class="table more-x">
       <thead>
       <tr class="re">
       <td >#</td>
            <td >Email</td>
            <td>date</td>
            <td>brand</td>
            <td>product</td>
            <td>color</td>
            <td>size</td>
            <td>height</td>
            <td>tHUMBNAIL</td>

            <td></td>
        </tr>
       </thead>
    <tbody>

      {
        reviews?.map((e,i)=>(

          <tr key={i}>

         
          <td>{i+1}</td>
          <td>{e?.email}</td>
          <td> 6/24/2024</td>
          <td>{e?.brand}</td>
          <td>{e?.productName}</td>
          <td>{e?.color}</td>
          <td>{e?.size}</td>
          <td>5’5-5’6</td>

           

              <td className="heil" > <img src={e?.pictures[0]} alt="" key={i}   /></td>
          
        
    
          <td className="icon-delet-eye">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" onClick={()=>handleNavigate(e._id)}>
<g clip-path="url(#clip0_549_1383)">
  <path d="M6.59156 13.6969C5.75666 13.6909 5.12278 12.9289 5.35204 12.1121C5.60525 11.2116 5.94143 10.3341 6.24511 9.44806C6.299 9.29155 6.37685 9.14359 6.42817 8.98708C6.59584 8.47394 6.91406 8.0677 7.29216 7.69225C9.08343 5.90907 10.8679 4.11906 12.6557 2.33161C13.2417 1.74577 13.8268 1.15907 14.4188 0.578367C15.2006 -0.188783 16.3418 -0.193914 17.1322 0.569815C17.5591 0.982895 17.9765 1.40538 18.3931 1.82873C19.204 2.65061 19.2023 3.80005 18.3863 4.61681C16.1502 6.85411 13.8987 9.07688 11.6831 11.3339C11.039 11.9907 10.3426 12.509 9.46325 12.7886C8.60354 13.0623 7.75324 13.3659 6.89781 13.6516C6.80029 13.6832 6.69336 13.6823 6.59156 13.6969ZM10.8106 10.2768C12.2802 8.80577 13.7618 7.32193 15.216 5.86631C14.5214 5.17357 13.8157 4.47056 13.1365 3.79321C11.6762 5.25311 10.1946 6.73438 8.72929 8.19941C9.41791 8.88616 10.1211 9.58746 10.8106 10.2768ZM16.2237 4.86312C16.6549 4.44234 17.1074 4.01814 17.5368 3.57256C17.7396 3.36132 17.7224 3.05429 17.5154 2.83962C17.0697 2.37779 16.6164 1.92366 16.1544 1.47893C15.9457 1.27795 15.6403 1.25828 15.4384 1.45413C14.9885 1.88859 14.5616 2.34786 14.1425 2.77975C14.8311 3.46908 15.5317 4.16952 16.2237 4.86312ZM6.6215 12.3755C7.75409 12.095 8.76179 11.6332 9.78061 11.2295C9.10568 10.559 8.43758 9.89449 7.76094 9.22313C7.36573 10.2323 6.90379 11.2406 6.6215 12.3755Z" fill="black"/>
  <path d="M9.05926 18.9982C7.15935 18.9982 5.25943 19.0024 3.35952 18.9964C1.73933 18.9913 0.432229 17.9548 0.0815016 16.3965C0.0276094 16.1562 0.00536818 15.9039 0.00536818 15.6576C0.000235591 12.134 -0.00318614 8.61042 0.00451275 5.08684C0.00707905 3.42339 1.13197 2.09692 2.77098 1.80015C2.95319 1.7668 3.14224 1.75397 3.32787 1.75311C4.32958 1.74884 5.33129 1.74969 6.333 1.7514C6.73249 1.75226 7.01905 1.97804 7.06268 2.31586C7.11829 2.74604 6.82487 3.07446 6.36978 3.07617C5.37491 3.08044 4.38005 3.0736 3.38518 3.07873C2.42624 3.08386 1.65635 3.63977 1.41084 4.51554C1.35353 4.71823 1.33214 4.93717 1.33129 5.14927C1.32701 8.63864 1.3253 12.1272 1.32958 15.6165C1.33129 16.8224 2.17132 17.6691 3.37406 17.6708C7.16705 17.6751 10.96 17.6751 14.753 17.6708C15.9609 17.6691 16.8009 16.8113 16.8035 15.5977C16.8052 14.6236 16.8035 13.6495 16.8043 12.6754C16.8043 12.2281 17.0652 11.9356 17.4613 11.9322C17.8642 11.9296 18.1303 12.2272 18.1311 12.6839C18.132 13.6649 18.1328 14.6458 18.1311 15.6268C18.1277 17.5374 16.6914 18.9888 14.7812 18.9973C12.8728 19.005 10.966 18.9982 9.05926 18.9982Z" fill="black"/>
</g>
<defs>
  <clipPath id="clip0_549_1383">
    <rect width="19" height="19" fill="white"/>
  </clipPath>
</defs>
</svg>
              <img src={delet} alt=""  onClick={()=>delete_review(e._id)}/>
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

export default Dashp