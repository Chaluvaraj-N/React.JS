import React from 'react'
import Home from './Home'

function Condtional({con}) {
    if (con){
        return <Home/>
    }
    else{
        return (
            <>
                <h1>Bye</h1>
                <h3>Have a good day </h3>
            </>
        )
    }
}

export default Condtional
