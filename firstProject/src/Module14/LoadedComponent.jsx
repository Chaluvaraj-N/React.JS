import React, { useEffect, useState } from 'react'

function LoadedComponent() {
    const[data,setData]=useState([])
    useEffect(()=>{
      const item=[]
      for(let i=0;i<10;i++){
        item.push("hello how are you welcome to react js class")
      }
      setData(item)
    })
  return (
    <div>
      <h1>Loaded component with more data</h1>
      {data.map((ele,index)=>{
        return(
            <ol key={index}>
                <li><h5>{ele}</h5></li>
            </ol>
        )
      })}
    </div>
  )
}

export default LoadedComponent