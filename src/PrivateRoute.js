import React from 'react';
import {useSelector} from "react-redux";
import {Route, Redirect} from "react-router-dom";

function PrivateRoute (props) {

    const {user, onLoad} = useSelector(state => state.auth)

    const {
        component: Component,
        ...rest
    } = props;

    if(!onLoad) return null

    return (
        <>
            {
                user ?
                    <Route {...rest} component={Component}  /> : <Redirect to='signin'/>
            }
        </>
    )
}

export default PrivateRoute;