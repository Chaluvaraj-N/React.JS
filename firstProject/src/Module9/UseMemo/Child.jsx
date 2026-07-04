import React from 'react'

const Child = React.memo(({name}) => {
  console.log("child component re rendered")
  return (
    <div  style={{width:"300px",textAlign:"center",
        margin:"50px auto",boxShadow:"0px 0px 10px black",
        borderRadius:"10px",padding:"10px"
    }}>
      <h3>Child Component</h3>
      <p>my name is {name}</p>
    </div>
  )
})

export default Child