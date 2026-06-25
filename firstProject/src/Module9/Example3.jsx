import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function Example3() {
    let inputRef=useRef()
    let inputRef1=useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    let handleChange=()=>{
        inputRef1.current.focus()
    }
  return (
    <div>
      <input type="text"  ref={inputRef}/>
      <br /> 
      <input type="text" ref={inputRef1}/>
      <button onClick={handleChange}>Click me</button>
    </div>
  )
}

export default Example3