import React, { ComponentType } from "react";

import { Route, Redirect, RouteProps } from "react-router-dom";

import { isAuth } from "../services/auth";

interface PrivateRouteProps extends RouteProps {
  component: ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth().token ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
