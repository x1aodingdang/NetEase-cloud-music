import React from "react";
import ReactDOM from "react-dom";
import "./assets/js/rem";
import "./assets/style/reset.scss";
import "antd-mobile/dist/antd-mobile.css";
import App from "./router/index";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
