import React, { Component } from "react";
import PropTypes from "prop-types";

function isNumber(value) {
  return typeof value === "number" && isFinite(value);
}

export default class Padding extends Component {
  static propTypes = {
    val: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
  };

  render() {
    const { val, children } = this.props;
    const style = { padding: 0 };

    return <div style={{ paddingTop: 20 }}>{children}</div>;
  }
}
