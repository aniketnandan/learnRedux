import React from "react";
import { Link } from "react-router";

const Home = React.createClass({
  render: function() {
    return (
      <div>
        OLA
        <Link to ="/about">About</Link>
      </div>
    );
  }
});

module.exports = Home;
