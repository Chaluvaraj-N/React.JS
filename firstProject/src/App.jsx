import React from 'react'
import ProtectedRoute from './Module11.1/ProtectedRoute'
import Dashboard from './Module11.1/Dashboard'
import Login from './Module11.1/Login'
import Home from './Module11.1/Home'
import Navbar from './Module11.1/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div >
      <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login   setIsAuth={setIsAuth}/>}
/>
  {/* ProtectedRoute */}

 <Route path="/dashboard" element=
 {  <ProtectedRoute isAuth={isAuth}>
 <Dashboard  setIsAuth={setIsAuth}/>
  </ProtectedRoute>
 }
/>
 </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App