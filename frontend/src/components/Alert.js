import React from 'react'

function Alert(props) {
    const r=(word)=>{
        if(word==="danger"){
            word="error";
        }
        return word;
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`  } role="alert">
    <strong> {r(props.alert.type)}</strong> :{props.alert.mes}
</div>
  )
}

export default Alert