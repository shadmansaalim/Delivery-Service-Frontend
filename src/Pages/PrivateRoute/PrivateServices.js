import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const PrivateServices = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (<div className="vh-100 d-flex flex-column align-items-center mx-auto justify-content-center">
            <h3>Loading...</h3>
            <Spinner animation="grow" />
        </div>);
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ? children :
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateServices;