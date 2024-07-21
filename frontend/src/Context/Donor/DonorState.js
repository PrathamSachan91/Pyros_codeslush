import React, { useState } from 'react'
import DonorContext from './DonorContext'
const DonorState = (props) => {
    const DonorInitial=[
        
    ]
    const [memories,setmemory]=useState(DonorInitial)
  return (
    <DonorContext.Provider value={{memories,setmemory}}>
        {props.children}
    </DonorContext.Provider>
  )
}

export default DonorState;
