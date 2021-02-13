import React from 'react';
import { connect } from "react-redux";
import { Route, Redirect,withRouter } from 'react-router-dom';

function LoginRoute({ component: Component,auth:{isAuth = false},...rest }) {
    return (
        <Route {...rest} render={props => {
            if (isAuth) {
                // not logged in so redirect to login page with the return url
                return <Redirect to={{ pathname: '/app', state: { from: props.location } }} />
            }

            // logged in so return component
            return <Component {...props} />
        }} />
    );
}
const mapStateToProps = state => ({ auth: state.auth });
export default withRouter(connect(mapStateToProps)(LoginRoute));