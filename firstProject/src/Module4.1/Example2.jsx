import React, { useState } from 'react'

function Example2() {
    const[data,setData]=useState(
        {
            pimage:"https://tse3.mm.bing.net/th/id/OIP.iHbWQ1A6D7VVnnCDKCV0vgAAAA?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
            pname:"SmartPhone",price:129999,rating:3.8,
            description:"A phone is a portable communication device that allows voice, text, and multimedia communication, ranging from basic feature phones to advanced smartphones",
           stock:true

        }
    )
    let Product2Change=()=>{
   setData({
       pimage:"https://tse2.mm.bing.net/th/id/OIP.wLDJpZMfPKyljAf8QttqeQHaHa?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
            pname:"Laptop",price:70000,rating:4.5,
            description:"A laptop is a portable personal computer that combines the functionality of a desktop computer into a compact, mobile form factor.",
           stock:false
   })
    }
    let Product1Change=()=>{
setData({
      pimage:"https://tse3.mm.bing.net/th/id/OIP.iHbWQ1A6D7VVnnCDKCV0vgAAAA?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3",
            pname:"SmartPhone",price:129999,rating:3.8,
            description:"A phone is a portable communication device that allows voice, text, and multimedia communication, ranging from basic feature phones to advanced smartphones",
           stock:true
})
    }
  return (
    <div style={{width:"300px",textAlign:"center",
        padding:"10px",boxShadow:"0px 0px 10px black",
        borderRadius:"10px",margin:"50px auto"
    }}>
      <img src={data.pimage} 
      alt='no image' height={150} width={150}/>
      <h2>Product Name:{data.pname} </h2>
      <h2>Price: {data.price}</h2>
      <h2>Rating: {data.rating}</h2>
      <p style={{textAlign:"justify"}}
      ><b>Description:</b>{data.description}</p>

      <h3>Stock:{data.stock?"Yes":"No"}</h3>
      <button style={{padding:"10px",backgroundColor:"blue",
      color:"white", border:"none",margin:"10px",
      borderRadius:"10px"}}
      onClick={Product1Change}>Product 1</button>
      <button style={{padding:"10px",backgroundColor:"blue",
      color:"white",border:"none",margin:"10px",
      borderRadius:"10px"}}
      onClick={Product2Change}>Product 2</button>
    </div>
  )
}

export default Example2