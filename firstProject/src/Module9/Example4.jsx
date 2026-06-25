import React, { useEffect, useState,useRef } from 'react'

function Example4() {
    const [count, setCount] = useState(0)
    let previousCount = useRef(0)
    useEffect(() => {
        previousCount.current = count
    }, [count])
  return (
    <div>
      <h1>Previous value storage</h1>
      <h5>Current Count: {count}</h5>
        <h5>Previous Count: {previousCount.current}</h5>

        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Example4
