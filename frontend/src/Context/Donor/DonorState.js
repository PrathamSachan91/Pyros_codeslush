import React, { useState } from 'react'
import DonorContext from './DonorContext'
const DonorState = (props) => {
    const DonorInitial=[];
    const host="http://localhost:5000";
    const [memories,setmemory]=useState(DonorInitial)
    const getallNote=async()=>{
      const token=localStorage.getItem("token");
      const url=`${host}/api/donor/ruch`;
      const response = await fetch(url, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "auth-token": token // Use the retrieved token here
          },
      });
  
      const json = await response.json();
       console.log(json);
      setmemory(json);

  }
  return (
    <DonorContext.Provider value={{memories,setmemory,getallNote}}>
        {props.children}
    </DonorContext.Provider>
  )
}

export default DonorState;
