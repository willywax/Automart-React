import React, { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LogInPage from '../pages/SignIn/LogInPage';
import RegisterPage from '../pages/SignUp/RegisterPage';
import MainLandingPage from '../pages/Landing/MainLandingPage';
import UserLandingPage from '../pages/Landing/UserLandingPage';
import AdminDashboardPage from '../pages/dashboard/AdminDashboardPage';
import UserDashboardPage from '../pages/dashboard/UserDashboardPage';


function Layout(props) {
    const [status, setLoggedIn] = useState({
        authenticated: 'false'
    });


    const handleLogin = event => {

    }
    return (
        <Switch>
            <Route exact
                path="/"
                render={(props) => <MainLandingPage logged_In={status.authenticated} />}
            />
            <Route path="/signin"
                render={(props) => <LogInPage onSubmit={handleLogin} />}
            />
            <Route path="/signup" component={RegisterPage} />
            <Route path="/user_landing" component={UserLandingPage} />
            <Route path="/admin_page" component={AdminDashboardPage} />
            <Route path="/user_page" component={UserDashboardPage} />
        </Switch>
    )
}


export default Layout;