import React from 'react'

function AddUser({ setUser }) {
  return (
    <div>
      <h1>Add User</h1>
      <input type="text" placeholder='Enter Name' onChange={(e) => setUser(e.target.value)} />
    </div>
  )
}

export default AddUser
