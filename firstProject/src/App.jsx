import React from 'react'
import Condtional from './Module6/Conditional'
import Home from './Module6/Home'
function App() {
  return (
    <div>
      <Condtional con={true}/>
      <Condtional con={false}/>
      <Home/>

    </div>
  )
}

export default App
