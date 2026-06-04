import React from 'react'

function Child(props) {
  return (
    <div>
      <h3>I am child component</h3>
      <p>my name is {props.name}</p>
      <p>my age is {props.age}</p>
      <pre>{props.Condition ? 'Adult' : 'Men'}</pre>
    </div>
  )
}

export default Child

