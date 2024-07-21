import React from 'react'
import './gototop.css' 
import arrow_dark from '../../src/components/assets/arrow_dark.png'
import arrow_light from '../../src/components/assets/arrow_light.png'
const Goto = ({theme,setTheme}) => {
    const gotobtn=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
  return (
    <div className='goto'>
      <div className='top_btn' onClick={gotobtn}>
        <img src={theme==='light'? arrow_dark:arrow_light} alt='' className='logo' />
      </div>
    </div>
  )
}
export default Goto;