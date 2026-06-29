import React, { useContext } from 'react'
import Component4 from './Component4'
import { contextData } from './Component1'
function Component3() {
  let data=useContext(contextData)
  return (
   <div style={{height:"400px",width:"400px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component3</h1>
      <h6>{data[0]}</h6>
      <Component4 />
    </div>
  )
}

export default Component3