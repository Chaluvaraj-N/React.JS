import React from 'react'
import useCounter from '../hooks/useCounter'

function Cart() {
    const[count,increase,decrease,reset]=useCounter()
  return (
    <div>
     <h1>Cart App</h1> 
     <h4>The items added: {count}</h4>
     <button onClick={increase}>Add item</button>
     <button onClick={decrease}>Remove item</button>
    </div>
  )
}

export default Cart