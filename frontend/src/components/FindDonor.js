import React from 'react'
import "./FindDonor.css"
import Cards from './Cards';

const Createmem = (theme,setTheme) => {
  return (
    <div>
        <div className='container container-form'>
        <h2>Fill the Details</h2>
        <form>
            <div className='description'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Name of Patient</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Age of Patient</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Age'/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Describe Medical Condition</label>
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
                <label htmlFor="formFileMultiple" className="form-label">Select Medical report </label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <button type="submit" className="btn btn-primary btn-form">Submit</button>
        </form>
        </div>
        <Cards theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default Createmem;
