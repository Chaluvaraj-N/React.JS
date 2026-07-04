import React from 'react'

function Navbar() {
  return (
    <div>
    <div style={{backgroundColor:'black', color:'white', padding:'10px',textAlign:'center'}}>
      <h1>
        Example for React Router Dom
      </h1>
      </div>
      <nav style={{display:'flex', justifyContent:'space-around', padding:'10px',
        backgroundColor:'darkblue'
      }}>
        <a href="/" style={{color:'white', textDecoration:'none'}}>Home</a>
        <a href="/about" style={{color:'white', textDecoration:'none'}}>About</a>
        <a href="/profile" style={{color:'white', textDecoration:'none'}}>Profile</a>  
        <a href="/login" style={{color:'white', textDecoration:'none'}}>Login</a>
        <a href="/signup" style={{color:'white', textDecoration:'none'}}>Signup</a>
      </nav>
    </div>
  )
}

export default Navbar