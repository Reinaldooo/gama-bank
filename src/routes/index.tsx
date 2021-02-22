import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../views/pages/Landing";
import Login from "../views/pages/Login";
import Dashboard from "../views/pages/Dashboard";
import PasswordPage from "../views/pages/PasswordPage";
import PrivateRoute from "./privateRoute";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-passwd" component={PasswordPage} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
