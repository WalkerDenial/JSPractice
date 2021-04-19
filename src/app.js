import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import publicRoutes from "./page/routes/publicRoutes";
import privateRoutes from "./page/routes/privateRoutes";
import adminRoutes from "./page/routes/adminRoutes";
import AuthRoute from "./page/routes/authRoute";

function App() {
  return (
    <Router>
      <Switch>
        {publicRoutes.map(({ path, component, ...routes }) => (
          <Route key={path} path={path} component={component} {...routes} />
        ))}
        {privateRoutes.map((route) => (
          <AuthRoute key={route.path} {...route} />
        ))}
        {adminRoutes.map((route) => (
          <AuthRoute key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
