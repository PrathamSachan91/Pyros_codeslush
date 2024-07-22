import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../src/components/assets/logo_light.png'
import './carditem.css'
const Carditem = (props) => {
    const {card , updateCard}=props;
  return (
    <div className='col-md-3 div1'>
        <div className="card my-3 ">
        <img src={card.image} className="card-img-top" alt="Memory" />
            <div className="card-body">
                <h5 className="card-title card-text">{card.name} ({ "Age:"+ card.age})</h5>
                <p className="card-text">{card.bloodGroup}</p>
                <p className="card-text">{card.email}</p>

                <div className='edit-btn'>
                  <Link to="#" className="btn btn-primary">Delete</Link>
                  <Link to="#" className="btn btn-primary mx-2 ">Request Blood</Link>
                  <Link to="#" className="btn btn-primary mx-3" onClick={()=>{updateCard(card)}}>Edit</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carditem
