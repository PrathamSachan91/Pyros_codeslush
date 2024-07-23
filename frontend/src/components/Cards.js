import React, { useContext, useRef, useState, useEffect } from 'react';
import './cards.css';
import DonorContext from '../Context/Donor/DonorContext';
import Carditem from './Carditem';
import { useNavigate } from 'react-router-dom';

const Cards = ({ theme }) => {
  const context = useContext(DonorContext);
  const navigate = useNavigate();
  const { Donorin, getallNote } = context;
  const [donor, setDonor] = useState({ name: "", age: "", bloodGroup: "", description: "", image: "", city: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getallNote();
    } else {
      console.log("Token in notes not found");
      navigate("/login");
    }
  }, [getallNote, navigate]);

  const updateCard = (currentDonor) => {
    setDonor(currentDonor);
    ref.current.click();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDonor = Donorin.filter(card =>
    card.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="exampleModalLabel">Details of Donor</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <img src={donor.image} alt="Donor" className="img-fluid mb-3" />
              <div className="modal-text">
                <ul>
                  <li>Name: {donor.name}</li>
                  <li>Age: {donor.age}</li>
                  <li>Blood Group: {donor.bloodGroup}</li>
                  <li>City: {donor.city}</li>
                  <li>Description: {donor.description}</li>
                </ul>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Request Donor</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>
        <h2>Certified List of Donors</h2>
        <div className="mb-3">
          <div className="search">
            <input type="text" className="form-control" placeholder="Search by blood group" value={searchTerm} onChange={handleSearchChange}/>
          </div>
        </div>
        {filteredDonor.map((card) => (
          <Carditem theme={theme} key={card.key} updateCard={updateCard} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
