import React, { lazy, Suspense } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Module14.1/Navbar'

let Home=lazy(()=>import('./Module14.1/Home'))
let About=lazy(()=>import('./Module14.1/About'))
let Profile=lazy(()=>import('./Module14.1/Profile'))
let Signup=lazy(()=>import('./Module14.1/Signup'))
let Login=lazy(()=>import('./Module14.1/Login'))




function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "6px solid lightgray",
          borderTop: "6px solid blue",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />

      <h2>Loading...</h2>

      <style>
        {`
          @keyframes spin {
            from{
              transform:rotate(0deg);
            }
            to{
              transform:rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
function App() {

  return (
    <div>
<BrowserRouter>
<Navbar/>
<Suspense fallback={<Loader/>}>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
   <Route path="/profile" element={<Profile/>}/>
  <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
</Routes>
</Suspense>
</BrowserRouter>
    </div>
  )
}

export default App