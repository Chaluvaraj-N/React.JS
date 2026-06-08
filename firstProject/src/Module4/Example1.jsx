import React from 'react'
import PropTypes from 'prop-types'

function Example1(props) {
    let handleClick = () => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>City: {city}</h3>
      <h4>Is Student: {isStudent ? "Yes" : "No"}</h4>
    </div>
  )
}

export default Example1
