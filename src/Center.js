import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Center extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  };

  render() {
    const { children, height, width } = this.props;

    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height,
      width,
      overflow: "hidden"
    };
    return <div style={style}>{children}</div>;
  }
}

Center.defaultProps = {
  height: "100%",
  width: "100%"
};
