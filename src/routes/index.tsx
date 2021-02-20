import React from "react";

import { Switch, Route } from "react-router-dom";
import Dashboard from "../views/pages/Dashboard";
import Deposit from "../views/pages/Dashboard/Deposit";

import Home from "../views/pages/Landing";
import Login from "../views/pages/Login";
import PrivateRoute from "./privateRoute";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <PrivateRoute  path="/dashboard" component={Dashboard}/>
            {/* <PrivateRoute  path="/dashboard/deposit" component={Deposit}/> */}
            {/* <PrivateRoute path="/plans" component={Dashboard}/> */}
            {/* <PrivateRoute path="/payments" component={Dashboard}/> */}
            {/* <PrivateRoute path="/transactions" component={Dashboard}/> */}
        </Switch>
    )
}

export default Routes;
