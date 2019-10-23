import React from 'react';
import { Switch, Route } from "react-router-dom";
import LogInPage from '../pages/SignIn/LogInPage';
import RegisterPage from '../pages/SignUp/RegisterPage';
import MainLandingPage from '../pages/Landing/MainLandingPage';
import UserLandingPage from '../pages/Landing/UserLandingPage';
import AdminDashboardPage from '../pages/dashboard/AdminDashboardPage';
import UserDashboardPage from '../pages/dashboard/UserDashboardPage';


function Layout() {
        return (
            <Switch>
                <Route exact path="/" component={MainLandingPage} />
                <Route path="/signin" component={LogInPage} />
                <Route path="/signup" component={RegisterPage} />
                <Route path="/user_landing" component={UserLandingPage} />
                <Route path="/admin_page" component={AdminDashboardPage} />
                <Route path="/user_page" component={UserDashboardPage} />
            </Switch>
        )
}


export default Layout;