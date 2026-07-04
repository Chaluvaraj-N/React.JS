import React, { useState } from "react";

function useCounter(){
    const[count,setCount]=useState(0)
    let increase=()=>{
        setCount(count+1)
    }
    let decrease=()=>{
        if(count>0){
        setCount(count-1)
        }
        else{
            setCount(0)
        }
    }
    let reset=()=>{
        setCount(0)
    }
    return[count,increase,decrease,reset]
}

export default useCounter