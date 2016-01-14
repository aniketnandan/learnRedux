import React from "react";
import ReactDom from "react-dom";
import Router from "react-router";
import { Provider } from "react-redux";
import routes from "./component/Router.jsx";

var history = new createHistory();

ReactDom.render((<Router history={history}>{routes}</Router>), document.querySelector("main"));
