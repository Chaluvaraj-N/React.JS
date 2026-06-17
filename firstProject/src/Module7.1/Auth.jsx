import React from 'react'
export default Auth
 const WithAuth = (Wrapped) => {
    return() => {
        return(
            <>
                <h1>Welcome to the Authenticated Page</h1>
                <Wrapped />
            </>
        )}}

function Login() {
    return(
        <>
            <h2>Login Page</h2>
            <p>Please enter your credentials to log in.</p>
        </>
    )
}
let Auth=WithAuth(Login);
export default Auth;