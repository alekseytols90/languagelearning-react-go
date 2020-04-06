import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router } from "react-router-dom";
import reduxThunk from "redux-thunk";
import cookie from "react-cookies";
import Routes from "./routes";
import reducers from "./reducers/index";
import ReactGA from "react-ga";

import * as serviceWorker from "./serviceWorker";
import { AUTH_USER } from "./actions/types";
import history from "./history";
// import stylesheets
import "./styles/index.scss";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Initialize Google Analytics
ReactGA.initialize("UA-000000-01");

function logPageView() {
  ReactGA.pageview(window.location.pathname);
}

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = cookie.load("token");

if (token) {
  // Update application state. User has token and is probably authenticated
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={logPageView}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
