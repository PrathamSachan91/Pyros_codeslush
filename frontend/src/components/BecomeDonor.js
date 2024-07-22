import React from 'react'
import "./FindDonor.css"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import DonorContext from '../Context/Donor/DonorContext'
const Createmem = (theme,setTheme) => {
    const context=useContext(DonorContext);
    const{memories,getallNote}=context;
    const Navigate=useNavigate();
    useEffect(() => {
        const val=localStorage.getItem("token");
        if(val) {
           getallNote();
        } 
        else{
          console.log("token in notes not found")
          Navigate("/login");
        }
      
        
      }, [])
  return (
    <div>
        {/* <div className='container container-form'> */}
        {/* <h2>Fill the Details</h2>
        <form>
            <div className='description'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Name of donor</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Age of Donor</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Age'/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Describe Medival Condition if any </label>
                <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Describe'/>
            </div>
            <div className='description'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Blood Group</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Blood Group'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Preferred City</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='City'/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Select your Medical certificate</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <button type="submit" className="btn btn-primary btn-form">Submit</button>
        </form>
        </div> */}
    </div>
  )
}

export default Createmem;
