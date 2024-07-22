import React, { useContext, useRef, useState, useEffect } from 'react';
import './cards.css';
import DonorContext from '../Context/Donor/DonorContext';
import Carditem from './Carditem';
import { useNavigate } from 'react-router-dom';

const Cards = ({ theme }) => {
  const context = useContext(DonorContext);
  const navigate = useNavigate();
  const { memories, getallNote } = context;
  const [memory, setMemory] = useState({ etitle: "", edescription: "", etag: "" });
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
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

  const updateCard = (currentMemory) => {
    ref.current.click();
    setMemory({ etitle: currentMemory.title, edescription: currentMemory.description, etag: currentMemory.tag });
  };

  const handleClick = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setMemory({ ...memory, [e.target.name]: e.target.value });
  };

  // Function to handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter memories based on search term
  const filteredMemories = memories.filter(card =>
    card.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="exampleModalLabel">Edit Memories</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className='description-modal description'>
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">Title for Memory</label>
                    <input type="text" className="form-control" onChange={onChange} value={memory.etitle} id="etitle" name="etitle" placeholder="Your Memories are safe with us." />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="etag" className="form-label">Tags</label>
                    <input type="text" className="form-control" onChange={onChange} value={memory.etag} id="etag" name="etag" placeholder="Provide suitable tag" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" onChange={onChange} value={memory.edescription} id="edescription" name="edescription" placeholder="Describe your Memory" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formFileMultiple" className="form-label">Select Files</label>
                  <input className="form-control" onChange={onChange} type="file" id="formFileMultiple" name="formFileMultiple" multiple />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update memories</button>
            </div>
          </div>
        </div>
      </div>

      <div className='row my-3'>
        <h2>Preference List of Donors</h2>
        <div className="mb-3">
          <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search by blood group"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          </div>
        </div>
        {filteredMemories.map((card) => (
          <Carditem theme={theme} key={card.key} updateCard={updateCard} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
