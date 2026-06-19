import React from 'react';
//hoc
function withAuthentication(WrappedComponent) {
    const isLoggedIn = flase; // Example authentication status
    return (props) => {
        if(isLoggedIn){
        return <WrappedComponent isLoggedIn={isLoggedIn} {...props}/>;
     } else {
        return <div>Please Login</div>
    }
};
    };




//normal component
import React from 'react';

// Higher Order Component (HOC)
function withAuthentication(WrappedComponent) {
    const isLoggedIn = true; // change to false to test

    return (props) => {
        if (isLoggedIn) {
            return (
                <WrappedComponent
                    isLoggedIn={isLoggedIn}
                    {...props}
                />
            );
        } else {
            return <h2>Please Log in to view this content</h2>;
        }
    };
}

// Normal Component
function AuthenticatedComponent({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? (
                <p>Welcome User</p>
            ) : (
                <p>Please Login</p>
            )}
        </div>
    );
}

// Enhanced Component
const EnhancedComponent = withAuthentication(
    AuthenticatedComponent
);

export default EnhancedComponent;