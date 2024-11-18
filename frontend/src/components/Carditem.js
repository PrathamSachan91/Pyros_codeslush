import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './carditem.css';

const Carditem = ({ card, updateCard }) => {
    const [wait, setWait] = useState(false);

    const request = async () => {
        setWait(true);

        const userEmail = localStorage.getItem("email");
        if (!userEmail) {
            console.error("No user email found in local storage");
            alert("No user email found in local storage");
            setWait(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/donor/selectdonor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userEmail, donorEmail: card.email }) // Assuming card.email contains donor's email
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
            <div className="card my-3">
                {card.image? <img src={card.image} className="card-img-top" alt="" />:<img src="https://www.pngarts.com/files/10/Default-Profile-Picture-Transparent-Image.png" alt="" />}
                
                <div className="card-body">
                    <h5 className="card-title card-text">{card.name} ({"Age : " + card.age})</h5>
                    <h5 className="card-text">{card.bloodGroup}</h5>
                    <div className='edit-btn'>
                        <Link to="#" className="btn btn-primary" onClick={request} disabled={wait}>
                            {wait ? "Wait" : "Request Blood"}
                        </Link>
                        <Link to="#" className="btn btn-primary mx-3" onClick={() => { updateCard(card) }}>Review</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carditem;
