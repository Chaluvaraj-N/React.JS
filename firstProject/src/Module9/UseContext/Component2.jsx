import React,{ useContext } from 'react'
import Component3 from './Component3'

import { contextData } from './Component1'
function Component2() {
  const data=useContext(contextData)
  return (
    <div style={{height:"650px",width:"500px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component2</h1>
            <img src={data[1]} height={100} width={100}/>
      <Component3 />
    </div>
  )
}

export default Component2