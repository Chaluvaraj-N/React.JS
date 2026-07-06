import React from 'react'
import { useNavigate } from 'react-router-dom'
function Login({setIsAuth}) {
    const navigate = useNavigate()
    const handleLogin = () => {
        setIsAuth(true)
        navigate('/dashboard')
    }
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>Please Login</h1>
      <button 
      style={{padding:'10px 20px',backgroundColor:'#007bff',color:'white',border:'none',cursor:'pointer'}}
     onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login