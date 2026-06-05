import React from 'react'

function Button(props) {
  return (
    <div>
      <button  style={{height:"70px", width:"170px",
       borderRadius:"10px",padding:"10px",color:"white",
       backgroundColor:props.bgcolor,margin:"10px"
      }}
      >{props.content}</button>
    </div>
  )
}

export default Button