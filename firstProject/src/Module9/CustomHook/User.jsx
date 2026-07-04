import React from 'react'
import UseFetch from '../hooks/useFetch'

function User() {
    let data=UseFetch('https://jsonplaceholder.typicode.com/users')
    console.log("user data",data)
  return (
    <div>
      <h1>Fake user API Data</h1>
           {data?(<ul>
        {data.map((ele)=>{
            return(
    <li key={ele.id}>
                <h3>{ele.name}</h3>
                <h4>{ele.email}</h4>
                <p>{ele.phone}</p>
            </li>
            )
        
        })}
      </ul>):(<h4>Data will be loaded soon</h4>)}
    </div>
  )
}

export default User