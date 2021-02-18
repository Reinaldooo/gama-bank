import React from 'react'

import {Switch, Route} from "react-router-dom";

import Home from "../views/pages/Landing";
import Login from "../views/pages/Login";

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
        </Switch>
    )
}

export default Routes
