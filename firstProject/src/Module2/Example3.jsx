import React from 'react'
import car from '../assets/car.jpg'
const Example3 = () => {
  let a=20
  let b=30
  let fun=()=>alert("hello how are you")
  return (
    <div>
      <h1 className="title"
      id="heading">Welcome to js class</h1>
      <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Avatar" className="avatar"/>
      {/* <abbr title="Hypertext Markup Language">HTML</abbr> */}
      <h3>the sum of two numbers {a+b}</h3>
      <button onClick={fun}>Click me</button>
    

    <h1 className='title' id='heading'>Welcome to js class</h1>
    <abbr title="Hypertext Markup Language">HTML</abbr>
    <h3>the sum of two numbers {a+b}</h3>
    <button onClick={fun}>Click me</button>
    </div>
  )
}

export default Example3
