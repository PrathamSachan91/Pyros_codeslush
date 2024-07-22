import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './carditem.css';

const Carditem = (props) => {
    const { card, updateCard } = props;
    const [wait, setWait] = useState(false);

    const request = async () => {
        setWait(true); 

        const userEmail = localStorage.getItem("email");
        if (!userEmail) {
            console.error("No user email found in local storage");
            setWait(false); 
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/donor/selectdonor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userEmail })
            });

            const data = await response.json();

            if (data.success) {
                alert("Request successful, email sent");
            } else {
                alert("Request failed: " + data.message);
            }
        } catch (error) {
            console.error("Error making request:", error);
            alert("Request failed: " + error.message);
        } finally {
            setWait(false); 
        }
    };

    return (
        <div className='col-md-3 div1'>
            <div className="card my-3 ">
                <img src={card.image} className="card-img-top" alt="Memory" />
                <div className="card-body">
                    <h5 className="card-title card-text">{card.name} ({ "Age:" + card.age})</h5>
                    <p className="card-text">{card.bloodGroup}</p>
                    
                    <div className='edit-btn'>
                        
                        <Link to="#" className="btn btn-primary" onClick={request}>
                            {wait ? "Wait" : "Request Blood"}
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carditem;
