import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Button.css"; // Tell Webpack that Button.js uses these styles

class Button extends Component {
  render() {
    return (
      <>
        <button className={this.props.className}>{this.props.children}</button>
      </>
    );
  }
}

export default Button;
