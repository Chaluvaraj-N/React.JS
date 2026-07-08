import React, {useState } from 'react'
import Child from './Child'
function Parent() {
    function fun1(greet){
    alert(greet)
    }
  return (
    <div>
      <h1>Parent Compoenent</h1>
      <Child fun1={fun1}/>
    </div>
  )
}

export default Parent
