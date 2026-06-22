import React, {useEffect, useState} from 'react'

function Example1() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title= `count is ${count}`
    }, [count])
    let increment=()=>{
        setCount(prev => prev + 1)
    }
    let decrement=()=>{
        setCount(prev => prev - 1)
    }
let reset=()=>{
    setCount(0)
}
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Example1
