// import React from "react";
// import { Link } from "react-router-dom";


// const Sing = ()=>{

//     const handleSubmit = async (e ) => {
//         e.preventDefault();
//         try {
           
//           const response = await axios.post(`${baseURL}/login`, loginData);
//           console.log(response.data.token);
//           Decrypt_Token(response.data.token)
//         } catch (error) {
//           console.error("There was an error logging in:", error);
//           // console.log(error.response.data.message,"error ts")
//           showAlert("Error!",error.response.data.message,"error")
           
        
          
//         }
//       };
      
      
//       const Decrypt_Token = async(token)=>{
    
//         const response = await axios.get(`${baseURL}/protected`,
//           {
//           headers: {'Authorization': `Bearer ${token}`}
//           }
//         )
    
//         if( response)
//         {
//           console.log(response.data)
//           sessionStorage.setItem("User_Data",response.data.id)
    
//           showAlert("Success!","Successfully Logged In.","success")
    
//           navigate('/ts')
    
         
    
//         }
//         else{
//           console.error('Failed to Fetch Details')
       
//         }
    
//       } 
//     ;



//     return(
//         <>
        
//         <div class="main-1 hwll ">
//        <h1 class="h1-1">My Account</h1>
//        <div class="input-sec">  
//         <div class="inp1">

//             <label for="">Email</label>
            
//             <input class="reset-pas-input" type="email"/>
//         </div>
//         <div class="inp1">

//             <label for="">Password</label>
            
//             <input class="reset-pas-input" type="password"/>
//         </div>
//         <div className="log-fog-boxx">
//             <p> <Link className="none-list" to='/reset'>forgot password      </Link>   <Link className="none-list" to='/signup'><span>| sign up</span></Link></p>
//         </div>
// <div class="btn-box">  <button class="create-btn" onClick={()=>handleSubmit()}>Login1</button>   </div>  

//       </div>
//         </div>
        
//         </>
//     )



// }


// export default Sing


import React, { useState } from "react";
 
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from "../../baseUrl";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Sing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = { email, password };
      const response = await axios.post(`${baseurl}/login`, loginData);
      console.log(response.data.checkUser);
      await Decrypt_Token(response.data.checkUser);
    } catch (error) {
      console.error("There was an error logging in:", error);
      toast.error( error.response?.data?.error || "An error occurred", "error");
    }
  };

  const Decrypt_Token = async (token) => {
    try {
      const response = await axios.get(`${baseurl}/protected`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      console.log(response.data,"SING");

      localStorage.setItem("User_Data", response.data.email);

      navigate('/dashboard')

    
    } catch (error) {
      console.error('Failed to fetch details:', error);
      showAlert("Error!", "Failed to fetch user details.", "error");
    }
  };

  

  return (
    <div className="main-1 hwll">
        <ToastContainer position="bottom-center"/>
      <h1 className="h1-1">My Account</h1>
      <div className="input-sec">
        <div className="inp1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="reset-pas-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inp1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="reset-pas-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="log-fog-boxx">
          <p>
            <Link className="none-list" to='/reset'>Forgot password</Link>
            <span> | </span>
            <Link className="none-list" to='/signup'>Sign up</Link>
          </p>
        </div>
        <div className="btn-box">
          <button className="create-btn" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Sing;
