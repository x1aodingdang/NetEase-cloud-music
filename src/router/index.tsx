import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import routes from "./router";
import "./app.scss";
import FooterTabBar from "../components/TabBar";

export default function APP() {
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
    <>
      <div className="body">
        <Route
          path={route.path}
          render={props => {
            return route.redirect ? (
              <Redirect exact to={{ pathname: route.redirect }}></Redirect>
            ) : (
              <route.component {...props} routes={route.routes} />
            );
          }}
        />
      </div>
      {route.tabBar && <FooterTabBar />}
    </>
  );
}
