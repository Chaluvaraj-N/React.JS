import React from 'react'
import Component3 from './Component3'

function Component2({name,content}) {
  return (
    <div style={{height:"400px",width:"500px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component2</h1>
      <Component3 name={name} content={content}/>
    </div>
  )
}

export default Component2