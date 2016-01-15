import React from "react"

var CheckBox = React.createElement({
  getInitialState: function () {
    return  {
      checked: false
    }
  },

  handleChange: function () {
    this.setState({ checked: !this.state.checked });
  },

  render: function () {
    <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
  }
})
