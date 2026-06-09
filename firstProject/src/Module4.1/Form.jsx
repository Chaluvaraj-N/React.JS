import React, { useState } from 'react'
import './form.css'
function Form() {
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState(false)

    let handleSubmit=()=>{
      if(username==="" && password===""){
        alert("please fill all input fields")
      }
      else{
          console.log("Username: "+username)
        console.log("Password: "+password)
        setError(true)
      }
    }
  return (
    <div>
     
     <div className='formControl'>
         <div className='inputControl'>
          <label>Username</label>
        <input type='text' name="username"
        value={username} onChange={(e)=>setUsername(e.target.value)}/>
      </div>
        <div className='inputControl'>
          <label>Password</label>
        <input type='password' name="password"
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button onClick={handleSubmit}>Login</button>
     </div>
   <center>{error&&"Form Submitted Successfully"}</center>
    </div>
  )
}

export default Form