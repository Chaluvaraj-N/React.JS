import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  return (
    <div style={{
        display: 'flex',backgroundColor:'#1f1f1f',
        color:'white',padding:'15px',
        cursor:'pointer',gap:'20px',fontSize:'20px'
    }}>
      <span onClick={()=>navigate('/')}>Home</span>
      <span onClick={()=>navigate('/dashboard')}>Dashboard</span>
      <span onClick={()=>navigate('/login')}>Login</span>
    </div>
  )
}

export default Navbar