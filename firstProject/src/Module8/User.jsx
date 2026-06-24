import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

function User() {
    const[data,setData]=useState([])
    console.log(data)
    useEffect(()=>{
       let fetchData=async()=>{
           try{
           let response= await fetch('https://jsonplaceholder.typicode.com/users')
                let res=await  response.json()   
                // console.log(res)
                setData(res)
        }
           catch(error){
            console.log("error while fecthing")
           }
       }
       fetchData()
    },[])
  return (
    <div>
      <h1 style={styles.heading}>👨‍💻 User Card App</h1>
{/* Resuseable Card component */}
<div style={styles.cardContainer}>
    {data.map((ele)=>{
        return(
            <UserCard key={ele.id} name={ele.name}
            email={ele.email} city={ele.address.city}
            company={ele.company.name}/>
        )
    })}
</div>
    </div>
  )
}
const styles={
    heading:{
        textAlign:"center",
        fontFamily:"monospace"
    },
    cardContainer:{
        display:"flex",
        flexWrap:"wrap",
        gap:"20px",
        justifyContent:"center",
        marginTop:"20px"
    }
}
export default User