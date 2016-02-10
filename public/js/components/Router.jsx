import React from "react";
import { Link, Router, Route } from "react-router";
import { render } from "react-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
console.log("io");
var routes = (
  <Route path="/" component="Home" >
    <Route path="/about" component="About" />
  </Route>
);

module.exorts = routes;
