import React from "react";
import { Link } from "react-roter";

const Home = React.createClass({
  render: function() {
    return (
      <Link to ="/about">About</Link>
    );
  }
});

module.exports = Home;
