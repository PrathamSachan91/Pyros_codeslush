import React from 'react'
import './login.css'
import user_light from '../../src/components/assets/user_light.png'
import user_dark from '../../src/components/assets/user_dark.png'
import fb_dark from '../../src/components/assets/fb_dark.png'
import fb_light from '../../src/components/assets/fb_light.png'
import google_dark from '../../src/components/assets/google_dark.png'
import google_light from '../../src/components/assets/google_light.png'
import lock_light from '../../src/components/assets/lock_light.png'
import lock_dark from '../../src/components/assets/lock_dark.png'
import email_light from '../../src/components/assets/email_light.png'
import email_dark from '../../src/components/assets/email_dark.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignIn = ({ theme, settheme,applyalert }) => {
    const [cred, setCred] = useState({ name: "", email: "", password: "" })
    const navigate=useNavigate();
    const handlesubmit = async(e) => {
        e.preventDefault();
        const {name,email,password}=cred;
        const response= await fetch("http://localhost:5000/api/auth/newuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name,email,password})
        });
        const json= await response.json();
        console.log(json);
        if(json.success){
        localStorage.setItem("token",json.authtoken)
        localStorage.setItem("userId",json.userId)
           navigate("/OTP");
            console.log(json.authtoken);
            applyalert("Verify via otp","success")
        }
        else{
            applyalert("Invalid credentials","danger");
        }
        
        
    }
    const onChange = (e) => {
        setCred({...cred,[e.target.name]:e.target.value})
    }
    return (
        <div className='Login'>
            <div className="wrapper">
                <form onSubmit={handlesubmit}>
                    <h1>Sign in</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" id="name" name='name' onChange={onChange} minLength={3} required />
                        <img src={theme === 'light' ? user_dark : user_light} alt=''></img>
                    </div>
                    <div className="input-box">
                        <input type="text" placeholder="Enter Mail/Number" id="email" name='email' onChange={onChange}  required />
                        <img src={theme === 'light' ? email_dark : email_light} alt=''></img>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" id="password" name='password' onChange={onChange} minLength={5} required />
                        <img src={theme === 'light' ? lock_dark : lock_light} alt=''></img>
                    </div>
                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <Link to="/OTP">Verify Via OTP</Link>
                    </div>
                    <button type="submit" className="btn" id="redirectButton">CREATE ACCOUNT</button>
                    <div className="register-link">
                        <p>Already have an account ?<Link to="/LogIn"> LogIn</Link></p>
                    </div>
                    <h3>OR</h3>
                    <div className="media-option">
                        <Link to="https://google.com">
                            <img src={theme === 'light' ? google_dark : google_light} alt=''></img>
                            <span>Login with Google</span>
                        </Link>
                        <Link to="https://facebook.com">
                            <img src={theme === 'light' ? fb_dark : fb_light} alt=''></img>
                            <span>Login with Facebook</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
