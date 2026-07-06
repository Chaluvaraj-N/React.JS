import React from 'react'
import { useState } from 'react'
import axios from 'axios'
function Example1() {
    const [data, setData] = useState(null)
    console.log("data",data)
   let handleClick=async()=>{
         try{
           const response = await axios.get("https://fakestoreapi.com/products/1")
           setData(response.data)
         }
         catch(error){
            console.log("error while fecthing",error)
         }
   }
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <button style={{padding:'10px 20px',backgroundColor:'#28a745',color:'white',
        border:'none',cursor:'pointer'}}
        onClick={handleClick}>Get Data</button>
        {data && (
            <div style={{marginTop:'20px'}}>    
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>Price: ${data.price}</p>
            </div>
        )}
    </div>
  )
}

export default Example1