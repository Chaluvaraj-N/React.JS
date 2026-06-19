import React, {useState} from 'react'

function UseState() {
    const [count, setCount] = useState(100)
    const [name, setName] = useState("John Doe")
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [data, setData] = useState({name: "John Doe", age: 30})
    const [arr, setArr] = useState([1, 2, 3, 4, 5])
    const [img, setImg] = useState("https://documents.bcci.tv/resizedimageskirti/164_compress.png")
  return (
    <div>
      <h1>{count}</h1>
      <h3>My name is {name}</h3>
      {isLoggedIn ? <p>Yes</p> : <p>No</p>}
      <h4>My name is {data.name} i am {data.age} years old</h4>
      <p>{arr[1]}</p>
      <img src={img} alt="noimage" />
    </div>
  )
}

export default UseState
