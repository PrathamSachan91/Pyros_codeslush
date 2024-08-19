import React, { useState } from 'react'
import DonorContext from './DonorContext'
const DonorState = (props) => {
    const DonorInitial=[];
    const host="http://localhost:5000";
    const [Donorin,setmemory]=useState(DonorInitial)
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
      //  console.log(json);
      setmemory(json);

  }
  const adddata=async(name,image,age,bloodGroup,city,description)=>{
    const url=`${host}/api/donor/newdonor`;
    const token=localStorage.getItem("token");
    const response = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "auth-token": token,
      },
      body: JSON.stringify({name, image, age, bloodGroup, city, description}),
  });
  
  const text = await response.text(); // Use text to see the raw response
  console.log(text);
  const json = JSON.parse(text); // Parse it manually to check for errors
  console.log(json);
  setmemory([...Donorin, json]);
  
  }
  return (
    <DonorContext.Provider value={{Donorin,setmemory,getallNote,adddata}}>
        {props.children}
    </DonorContext.Provider>
  )
}

export default DonorState;
