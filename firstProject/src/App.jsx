import React from 'react'
import Example1 from './Module4/Example1'
import Example2 from './Module4/Example2'
function App() {
  return (
    <div>
      <Example1 name="John Doe" age={25} city="New York" isStudent={true} />
      <Example2 name="Jane Smith" age={30} city="Los Angeles" isStudent={false} />
    </div>
  )
}

export default App
