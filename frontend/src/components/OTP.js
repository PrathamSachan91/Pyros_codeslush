import React, { useState } from 'react';
import './login.css';
import lock_light from '../../src/components/assets/lock_light.png';
import lock_dark from '../../src/components/assets/lock_dark.png';
import { useNavigate } from 'react-router-dom';

const OTP = ({ theme, settheme, applyalert }) => {
    const [otp, setOtp] = useState('');
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = { userId, otp };
        console.log('Sending request:', requestBody); 
        const response = await fetch("http://localhost:5000/api/auth/verifyotp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            navigate("/FindDonor");
            localStorage.removeItem('userId');
            alert("OTP verified successfully");
        } else {
            alert("Invalid OTP");
        }
    };

    const onChange = (e) => {
        setOtp(e.target.value);
    };

    return (
        <div className='Login'>
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>OTP Verification</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            id="otp"
                            name="otp"
                            value={otp}
                            onChange={onChange}
                            required
                        />
                        <img src={theme === 'light' ? lock_dark : lock_light} alt='' />
                    </div>
                    <div className="remember-forget">
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn" id="redirectButton">VERIFY</button>
                    <div className="media-option"></div>
                </form>
            </div>
        </div>
    );
};

export default OTP;
