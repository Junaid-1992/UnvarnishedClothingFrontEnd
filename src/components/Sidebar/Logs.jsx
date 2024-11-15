import React, { useState } from "react";
 
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { signup } from "../../Redux/Features/userAuthentication";


const Logs = ()=>{

const dispatch = useDispatch()
const loading= useSelector((state)=>state.auth.loading)
const error=useSelector((state)=>state.auth.error)

const user_data=useSelector((state)=>state.auth.user_data)

const message=useSelector((state)=>state.auth.user)

const [credentials, setCredentials] = useState({   password: '',email:'' });

const[confirmPassword,setconfirmPassword]=useState('')

const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit= async(e)=>{
    e.preventDefault()


    if (!credentials.email || !credentials.password || !confirmPassword) {
        toast.error("Please fill out all fields.");
        return;  
      }


    if(confirmPassword!=credentials.password)
    {
        toast.error("Passwords Don't Match.")
        return
    }

    const resultAction = await dispatch(signup(credentials));

    if(resultAction)
    {
            
        console.log(resultAction.payload.message,"TSTST")

        toast.success(resultAction.payload.message)

        
       
    }

  }




    return(
        <>
        <ToastContainer position="bottom-center"/>
        <section class="sec1">
        <div class="main-1 hwll ">
       <h1 class="h1-1">My Account</h1>
        <form onSubmit={handleFormSubmit}>  
       <div class="input-sec">
        <div class="inp1">

            <label for="">Email</label>
            
            <input class="reset-pas-input" type="email"
              name="email"
            value={credentials.email}
            onChange={handleChange}
            
            />
        </div>
        <div class="inp1">

            <label for="">Create Password</label>
            
            <input class="reset-pas-input" type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}

            />
        </div>


        <div class="inp1">

<label for="">Type Password Again</label>

<input class="reset-pas-input" type="password"
onChange={(e)=>setconfirmPassword(e.target.value)}

/>
</div>
<Link to='/login' style={{textDecoration:'none'}}>

        <div className="log-fog-boxx" >
            <p><span>already have an account?</span></p>
        </div>
</Link>
        {/* <Link to='/dashboard' style={{textDecoration:'none'}}> */}
        
<div class="btn-box"><button class="create-btn">Create Account</button></div>
        
        {/* </Link> */}

      </div>
      </form>
        </div>
        </section>

     
        </>
    )



}


export default Logs