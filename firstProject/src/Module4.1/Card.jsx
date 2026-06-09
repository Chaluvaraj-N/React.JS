import React, { useState } from 'react'
import './Card.css'
function Card() {
    const[darkMode,setDarkMode]=useState(false)
    const toggleTheme=()=>{
        setDarkMode(!darkMode)
    }
    const themeStyles={
        backgroundColor:darkMode?"#121212":"#f4f4f4",
        color:darkMode?"#fff":"#333333",
        minHeight:"100vh",
        padding:"2rem",
        transition:"all 0.3s ease-in-out"
    }
    const CardStyles={
             backgroundColor:darkMode?"#121212":"#f4f4f4",
        color:darkMode?"#fff":"#333333",
        borderRadius:"12px",
        padding:"20px",
        maxWidth:"350px",
        margin:"0 auto",
        boxShadow:darkMode?
        "0px 0px 10px white":"0px 0px 10px black"
    }
  return (
    <div>
      <div style={themeStyles}>
        <div className='toggle-container'>
    <label className='switch'>
        <input type='checkbox' onChange={toggleTheme}/>
        <span className='slider round'></span>
    </label>
    <span>DarkMode</span>
        </div>
        <div style={CardStyles}>
            <img src='https://www.pngall.com/wp-content/uploads/5/Model-Man-PNG-Image-File.png'
             alt='no image'
             style={{width:"100px", height:"100px",
                borderRadius:"50%",objectFit:"cover",
                marginBottom:"15px"
             }}/>
             <h2>Jhon Doe</h2>
             <p>Frontend Developer</p>
             <p>Bangalore,India</p>
        </div>
      </div>
    </div>
  )
}

export default Card