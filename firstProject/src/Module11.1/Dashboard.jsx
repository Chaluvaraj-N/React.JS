import React from 'react'
import { useNavigate } from 'react-router-dom'
function Dashboard({setIsAuth}) {
    const navigate = useNavigate()
    const handleLogout = () => {
        setIsAuth(false)
        navigate('/login')
    }
  return (
    <div style={{textAlign:'center',marginTop:'50px'}}>
      <h1>Welcome to Dashboard Page</h1>
      <button 
        style={{padding:'10px 20px',backgroundColor:'#dc3545',color:'white',border:'none',cursor:'pointer'}}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default Dashboard