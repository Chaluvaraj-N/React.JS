import React from 'react'

function Component4({name,content}) {
  return (
   <div style={{height:"200px",width:"300px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component4</h1>
      <h5 style={{textAlign:"center"}}>{content} {name}</h5>
    </div>
  )
}

export default Component4