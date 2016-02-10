import React from "react";
import ReactDom from "react-dom";
import Router from "react-router";
import { Provider } from "react-redux";
import { createHistory } from 'history'
import routes from "./Router.jsx";

var history = new createHistory();

ReactDom.render((
  <Router history={ history } routes={ routes } />
), document.querySelector(".main"));
