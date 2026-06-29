import React, { createContext, useState } from 'react'
import Component2 from './Component2'

export const contextData=createContext()
function Component1() {
  const[content,setContent]=useState("Welcome to react js class")
  const [image,setImage]=useState('https://www.autolist.com/6tuem73u73an/6Ks3mSCRBKGwQPrDl6asyf/10553a8f027ee9135ba2f830cdb23548/best-used-sports-cars-under-20000-1166-image.jpg')

  let btnchange=()=>{
    setImage('https://images.squarespace-cdn.com/content/v1/5b061f0e0dbda31446baccc0/1527895159358-L9MJ3G7A5ITWRIB8F0SZ/image-asset.jpeg?format=2500w')
  }
  return (
    <div style={{height:"900px",width:"600px",
        boxShadow:"0px 0px 10px black"
    }}>
      <h1>Component1</h1>
      <button onClick={btnchange}>Change Image</button>
      <h4 style={{textAlign:"center"}}>{content}</h4>
  <contextData.Provider value={[content,image]}>
      <Component2 />
  </contextData.Provider>

    </div>
  )
}

export default Component1