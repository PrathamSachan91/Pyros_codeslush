import React, { useState } from 'react'
import "./BecomeDonor.css"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import app from "../firebase"
import{getDownloadURL, getStorage,ref, uploadBytes}from "firebase/storage"
import DonorContext from '../Context/Donor/DonorContext'
const Createmem = (theme,setTheme) => {
    const context=useContext(DonorContext);
    const [uploading,setuploading]=useState(false);
    const[note,setnote]=useState({name:"",image:"",age:"",description:"",city:"",bloodGroup:""})
    const{getallNote,adddata}=context;
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
      
        
      },[]);
      const handlechange=(e)=>{
            setnote({...note,[e.target.name]:e.target.value})
      }
      const handlesubmit=(e)=>{
        e.preventDefault();
       if(!note.name || !note.age || !note.description || !note.bloodGroup || !note.city){
        alert("Please fill in all the necessary details"); 
        return ;
       }
       adddata(note.name,note.image,note.age,note.bloodGroup,note.city,note.description);
       setnote({name:"",image:"",age:"",description:"",city:"",bloodGroup:""});

      }
      const filechange=async(e)=>{
        const file=e.target.files[0];
        setuploading(true);
        console.log(file);
        if(file){
            const storage=getStorage(app);
            const storageRef=ref(storage,"files/"+file.name)
            await uploadBytes(storageRef,file);
            const downloadurl=await getDownloadURL(storageRef);
            console.log(downloadurl);
            setuploading(false);
            setnote(prevnote=>({
                ...prevnote,image:downloadurl
            }))
        }
      }
  return (
    <div>
        <div className='container container-form'>
        <h2>Fill the Details</h2>
        <form>
            <div className='description'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Name of donor</label>
                    <input type="text"  value={note.name} name="name" className="form-control" id="exampleInputPassword1" placeholder='Name' onChange={handlechange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Age of Donor</label>
                    <input type="text" value={note.age} name="age" className="form-control" id="exampleInputPassword1" placeholder='Age' onChange={handlechange}/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description about your Health</label>
                <input type="text" value={note.description} name="description" className="form-control" id="exampleInputPassword1" placeholder='Describe' onChange={handlechange}/>
            </div>
            <div className='description'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Blood Group</label>
                    <input type="text" value={note.bloodGroup} name="bloodGroup" className="form-control" id="exampleInputPassword1" placeholder='Blood Group' onChange={handlechange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Preferred City</label>
                    <input type="text" value={note.city}  name="city"className="form-control" id="exampleInputPassword1" placeholder='City' onChange={handlechange}/>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label">Select your Medical certificate if any</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple onChange={filechange} />
            </div>
            <button type="submit" disabled={uploading} onClick={handlesubmit} className="btn btn-primary btn-form">Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Createmem;
