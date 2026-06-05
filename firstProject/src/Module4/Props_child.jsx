// import React from 'react'

// const props_child = (props) => {
//   return (
//     <div>
//       <h1>This is child component</h1>
//       <h1>Name: {props.name}</h1>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }

// export default props_child

import React from 'react'
function props_child(props) {
  return (
    <div>
      <h1>This is child component</h1>
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
        <p>City: {props.city}</p>
        <p>Company: {props.company}</p>
        <p>Experience: {props.exp}</p>  
    </div>
  )
}

export default props_child
