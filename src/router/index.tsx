import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import routes from "./router";
import "./app.scss";
import FooterTabBar from "../components/tabBar";

export default function APP() {
  return (
    <>
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
          ))}
        </Switch>
      </Router>
      <FooterTabBar />
    </>
  );
}

function RouteWithSubRoutes(route: any) {
  console.log(useLocation(), "useLocation");

  return (
    <div className="body">
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
    </div>
  );
}
