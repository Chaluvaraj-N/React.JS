import React, { useState, useTransition } from 'react'
import Child from './Child'

function Parent() {
    const[count,setCount]=useState(0)
    let name="Virat"
  return (
    <div style={{width:"500px",textAlign:"center",
        margin:"50px auto",boxShadow:"0px 0px 10px black",
        borderRadius:"10px",padding:"10px"
    }}>
      <h1>Parent Component</h1>
      <h5>The count is :{count}</h5>
      <button onClick={()=>setCount(count+1)}>Click</button>
     <Child name={name}/>
    </div>
  )
}

export default Parent