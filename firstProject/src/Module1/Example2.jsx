import React from 'react'

function Example2() {
  return (
    <div>
      <h1>Employee details</h1>
        <p>Name: John Doe</p>
        <p>Role: Software Engineer</p>
        <p>CurrentDate: {new Date().toLocaleDateString()}</p>
    </div>
  )
}

export default Example2
