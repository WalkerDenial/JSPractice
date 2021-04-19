import React from "react";
import { Route, Redirect } from "react-router-dom";

function AuthRoute(props) {
  const {
    user: { role: userRole },
    role: routeRole,
    backUrl,
    ...otherProps
  } = props;
  if (userRole && userRole.indexOf(routeRole) > -1) {
    return <Route {...otherProps} />;
  } else {
    return <Redirect to={backUrl} />;
  }
}

export default AuthRoute;
