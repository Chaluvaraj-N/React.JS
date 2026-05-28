import React from 'react'

function Example3() {
    let content = "This is Example 3"
    let handleClick = () => {
        alert(content)
    }
  return (
    <div>
        <h1>This is Example 3</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Example3
