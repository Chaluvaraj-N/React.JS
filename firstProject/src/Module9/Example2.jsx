import React from 'react'
import { useRef } from 'react'

function Example2() {
    let h1ref=useRef()
    let pref=useRef()
    let btn=()=>{
        h1ref.current.style.color="red"
        pref.current.style.color="blue"
    }
    


  return (
    <div>
      <h1 ref={h1ref}>Example</h1>
      <p ref={pref}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid omnis autem laboriosam vitae, provident dignissimos incidunt dolorum suscipit ab, possimus tempore, molestiae accusamus adipisci a voluptate id ipsum commodi.</p>
      <button onClick={btn}> click here</button>
    </div>
  )
}

export default Example2