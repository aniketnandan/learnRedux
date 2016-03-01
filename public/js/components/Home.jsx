import React from "react";
import { Link } from "react-router";

const Home = React.createClass({
  render: function() {
    return (
      <div>
        <Link to ="about">About</Link>
        {this.props.children}
      </div>
    );
  }
});

export default Home;
