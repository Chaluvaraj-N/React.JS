import React, { useState } from 'react'
import Component2 from './Component2'

function Component1() {
   const[content,setContent]=useState("welcome to react class")
    let name="virat kholi"
    let Change=()=>{
        setContent("Thankyou for visiting")
    }
  return (
    <div style={{height:"600px",width:"600px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component1</h1>
      <h4 style={{textAlign:"center"}}>{content} {name}</h4>
      <button onClick={Change}>Change</button>
      <Component2 name={name} content={content}/>
    </div>
  )
}

export default Component1