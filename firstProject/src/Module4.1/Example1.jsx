import React,{useState} from 'react'

function Example1() {
    const [state,setState]=useState({name:"virat", city:"delhi", age:35})
    let handleChange=()=>{
        setState({name:"rohit" , city:"mumbai", age:38})
    }
    return (
    <div>
      <h1>my name is {state.name}</h1>
      <h3>i am from {state.age}</h3>
      <p>i am {state.city} city</p>
        <button onClick={handleChange}>change name</button>
    </div>
  )
}

export default Example1
