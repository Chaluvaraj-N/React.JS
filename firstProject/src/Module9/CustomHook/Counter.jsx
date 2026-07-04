import React from 'react'
import useCounter from '../hooks/useCounter'

function Counter() {
    const[count,increase,decrease,reset]=useCounter()
  return (
    <div>
      <h1>Counter App</h1>
      <h4>The count value is: {count}</h4>
      <button onClick={increase}>Increment</button>
        <button onClick={reset}>Reset</button>
          <button onClick={decrease}>Decrement</button>
    </div>
  )
}

export default Counter