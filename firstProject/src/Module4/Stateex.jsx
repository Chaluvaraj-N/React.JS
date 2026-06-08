import React from 'react'

function stateex() {
    const[state,setState]=React.useState(100)
    const[name,setName]=React.useState("virat")
    let[isplaced,setIsplaced]=useState(false)
    const[data,setData]=useState({name:"virat",age:34})
    const[num,setNum]=useState([20,30,40,50])
    const[image,setImage]=useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fdog%2F&psig=AOvVaw1n9s8Xo7l5j6m9z5z5z5&ust=1686225600000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjL4NqH8fYCFQAAAAAdAAAAABAD")
  return (
    <div>
      h1
        <h1>{state}</h1>
        <h3>my name is {name}</h3>
        <p>is placed:{isplaced.toString()}</p>
        <p>my name is {data.name} and my age is {data.age}</p>
        <p>numbers are:{num.join(",")}</p>
        <img src={image} alt="dog"/>

    </div>
  )
}

export default stateex


