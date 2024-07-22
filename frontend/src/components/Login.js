import React, { useState } from 'react'
import './login.css'
import user_light from '../../src/components/assets/user_light.png'
import user_dark from '../../src/components/assets/user_dark.png'
import fb_dark from '../../src/components/assets/fb_dark.png'
import fb_light from '../../src/components/assets/fb_light.png'
import google_dark from '../../src/components/assets/google_dark.png'
import google_light from '../../src/components/assets/google_light.png'
import lock_light from '../../src/components/assets/lock_light.png'
import lock_dark from '../../src/components/assets/lock_dark.png'
import {Link, useNavigate} from 'react-router-dom'
const Login = ({theme,settheme,applyalert}) => {
    const [cred,setCred]=useState({email:"",password:""})
    const navigate=useNavigate();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email:cred.email,password:cred.password})
        });
        const data=await response.json();
        console.log(data)
        if(data.success){
            localStorage.setItem("token",data.authtoken);
        navigate("/FindDonor")
        console.log(data.authtoken)
        alert("Logged in","success");
        }
        else{
            alert("Invalid credentials","danger");
        }
        

    }
    const onChange=(e)=>{
       setCred( {...cred,[e.target.name]:e.target.value})
    }

  return (
    <div className='Login'>
      <div className="wrapper">
            <form onSubmit={handlesubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" id="email" name='email' value={cred.email} onChange={onChange}  />
                    <img src={theme==='light'? user_dark:user_light} alt=''></img>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" id="password" name='password' value={cred.password} onChange={onChange}  />
                    <img src={theme==='light'? lock_dark:lock_light} alt=''></img>
                </div>
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" />Remember me
                    </label>
                </div>
                <button type="submit" className="btn" id="redirectButton">LOGIN</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/SignIn">Register</Link></p>
                </div>
                <h3>OR</h3>
                <div className="media-option">
                    <Link to="https://google.com">
                    <img src={theme==='light'? google_dark:google_light} alt=''></img>
                        <span>Login with Google</span>
                    </Link>
                    <Link to="https://facebook.com">
                    <img src={theme==='light'? fb_dark:fb_light} alt=''></img>
                        <span>Login with Facebook</span>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
