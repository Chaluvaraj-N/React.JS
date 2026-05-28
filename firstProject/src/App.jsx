import React from 'react'
import Example1 from './Module1/Example1'
import Example2 from './Module1/Example2'
import Example3 from './Module1/Example3'

function App() {
  return (
    <div className="App">
      <h1>My First React App
        <Example1 />
        <Example2 />
        <Example3 />
      </h1>
    </div>
  )
}

export default App
