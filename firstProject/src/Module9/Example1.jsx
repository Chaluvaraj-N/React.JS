import React from 'react'

function Example1() {
    let refContainer=useRef(10)
    let handleClick=()=>{
        let res=refContainer.current++
        console.log(res)
    }
  return (
    <div>
      <h1>Example for useRef hook</h1>
      <p>ref value is {refContainer.current}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Example1
