import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Padding extends Component {
  static propTypes = {
    val: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
  };

  render() {
    const { val, children } = this.props;
    const style =
      typeof val === "number"
        ? { padding: val }
        : {
            paddingTop: val.top,
            paddingBottom: val.bottom,
            paddingLeft: val.left,
            paddingRight: val.right
          };

    return <div style={style}>{children}</div>;
  }
}
