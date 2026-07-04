import React from 'react'
import useFetch from '../hooks/useFetch'

function Product() {
    let data=useFetch('https://fakestoreapi.com/products')
//console.log("data received ")
  return (
    <div>
      <h1>Fake product API Data</h1>
      {data?(<ul>
        {data.map((ele)=>{
            return(
    <li key={ele.id}>
                <h3>{ele.title}</h3>
                <h4>{ele.price}</h4>
                <p>{ele.description}</p>
            </li>
            )
        
        })}
      </ul>):(<h4>Data will be loaded soon</h4>)}
    </div>
  )
}

export default Product