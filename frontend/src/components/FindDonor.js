import React from 'react'
import "./FindDonor.css"
import Cards from './Cards';

const Createmem = (theme,setTheme) => {
  return (
    <div className='to-design'>
        {/*  */}
        <Cards theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default Createmem;
