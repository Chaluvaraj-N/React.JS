import React from 'react'

function Child({fun1}) {
    let greet="Welcome to react js class"
  return (
    <div>
      <h3>Child Compoenent</h3>
      <button onClick={()=>fun1(greet)}>Update</button>
    </div>
  )
}

export default Child
