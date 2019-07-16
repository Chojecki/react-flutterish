import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Container extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string,
    borderRadius: PropTypes.number,
    shadow: PropTypes.object,
    padding: PropTypes.number
  };

  render() {
    const {
      children,
      height,
      width,
      backgroundColor,
      padding,
      borderRadius,
      shadow
    } = this.props;

    const style = {
      backgroundColor,
      height,
      width,
      padding,
      borderRadius,
      boxShadow: `${shadow.shadowOffset.width}px ${
        shadow.shadowOffset.height
      }px ${shadow.shadowRadius}px ${shadow.shadowColor}`
    };
    return <div style={style}>{children}</div>;
  }
}

Container.defaultProps = {
  height: 200,
  width: 600,
  shadow: {
    shadowColor: "#590E0E0E",
    shadowOffset: { width: 2, height: 10 },
    shadowRadius: 20
  },
  padding: 0,
  borderRadius: 0,
  backgroundColor: "lightGray"
};
