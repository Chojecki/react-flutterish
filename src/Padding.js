import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Padding extends Component {
  static propTypes = {
    val: PropTypes.number || PropTypes.object
  };

  render() {
    const { val, children } = this.props;
    const style =
      typeof val === "number"
        ? val
        : `${val.top}px ${val.right}px ${val.bottom}px ${val.left}px`;

    return <div style={{ padding: style }}>{children}</div>;
  }
}
