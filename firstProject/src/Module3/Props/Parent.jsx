import React from 'react'

import Child from './Child'

function Parent() {
  let name = 'John'
  let age = 30
  let Condition = true

  return (
    <div>
      <h1>I am parent component</h1>
      <Child name="raj" age={20} Condition={Condition} />
      <Child name="raju" age={21} Condition={Condition} />
      <Child name={name} age={age} Condition={Condition} />
    </div>
  )
}

export default Parent

