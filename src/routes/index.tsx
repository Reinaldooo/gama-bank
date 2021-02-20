import React from 'react'

import {Switch, Route} from "react-router-dom";

import Home from "../views/pages/Landing";
import Login from "../views/pages/Login";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            {/* <PrivateRoute path="/dashboard" component={DashBoard}/>
            <PrivateRoute path="/deposit" component={DashBoard}/>
            <PrivateRoute path="/plans" component={DashBoard}/>
            <PrivateRoute path="/payments" component={DashBoard}/>
            <PrivateRoute path="/transactions" component={DashBoard}/> */}
        </Switch>
    )
}

export default Routes
