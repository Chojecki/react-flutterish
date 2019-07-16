import React from "react";
import PropTypes from "prop-types";

const Row = ({
  children,
  gap,
  mainAxisAlignment,
  crossAxisAlignment,
  overflow
}) => {
  const style = {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: crossAxisAlignment,
    justifyContent: mainAxisAlignment,
    overflow: overflow
  };

  const _rengerItems = () => {
    return children.map((child, index) => (
      <div
        style={{
          paddingRight: index == children.length - 1 ? 0 : gap,
          display: "flex"
        }}
      >
        {child}
      </div>
    ));
  };

  return <div style={style}>{children && _rengerItems()}</div>;
};

Row.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  gap: PropTypes.number,
  mainAxisAlignment: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  crossAxisAlignment: PropTypes.oneOf([
    "stretch",
    "flex-end",
    "center",
    "flex-start"
  ]),
  overflow: PropTypes.string
};

export default Row;
