import React from 'react'

//hoc
function WithUser(Wrapped) {
    return(props) => {
        return(<>
        <h1>Welcome to the User Dashboard</h1>
        <Wrapped {...props} name="virat" city="Delhi" />
        </>
        )}}


function ProfileDashboard({name,city}) {
    return(<>
    <h2>Profile Dashboard</h2>
    <p>Name: {name}</p>
    </>)}

let UserDashboard=WithUser(ProfileDashboard);
export default UserDashboard;
