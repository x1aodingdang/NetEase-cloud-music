import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import routes from "./router/router";

export default function RouteConfigExample() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props =>
        route.redirect ? (
          <Redirect exact to={{ pathname: route.redirect }}></Redirect>
        ) : (
          <route.component {...props} routes={route.routes} />
        )
      }
    ></Route>
  );
}
