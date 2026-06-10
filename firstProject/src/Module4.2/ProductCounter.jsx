import React, { useState } from 'react'
import { GiShoppingCart } from "react-icons/gi"
function ProductCounter() {
    const[count,setCount]=useState(0)

    const addItem=()=>{
        setCount(count+1)
    }

    const removeItem=()=>{
       if(count>0){
         setCount(count-1)
       }

    }

    const ResetItem=()=>{
        setCount(0)
    }
  return (
    <div style={style.container}>
      <div style={style.card}>
        <h1><GiShoppingCart />Product Counter App</h1>
      <h2>Total Items:{count}</h2>
      <div style={style.buttonContainer}>
        <button style={style.addBtn}
        onClick={addItem}>Add Item</button>
         <button style={style.removeBtn}
         onClick={removeItem}>Remove Item</button>
          <button style={style.resetBtn}
          onClick={ResetItem}>Reset </button>
      </div>
      <p>{count===0?"No products added": `${count} product added`}</p>
      </div>
    </div>
  )
}

const style={
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh",
        backgroundColor:"#f4f4f4"
    },
    card:{
        backgroundColor:"white",
        padding:"30px",
        textAlign:"center",
        boxShadow:"0px 0px 10px black",
        width:"350px",
        borderRadius:"10px"
    },
    buttonContainer:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"20px"
    },
    addBtn:{
        padding:"10px 15px",
        border:"none",
        backgroundColor:"green",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    },
     removeBtn:{
        padding:"10px 15px",
        border:"none",
        backgroundColor:"red",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    },
     resetBtn:{
        padding:"10px 15px",
        border:"none",
        backgroundColor:"orange",
        color:"white",
        borderRadius:"5px",
        cursor:"pointer"
    }
}
export default ProductCounter