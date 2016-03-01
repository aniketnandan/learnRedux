import React from "react";
import { Link, Router, Route } from "react-router";
import { render } from "react-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";

var routes = (
  <Route path="/" component={Home} >
    <Route path="about" component={About} />
  </Route>
);

export default routes;
