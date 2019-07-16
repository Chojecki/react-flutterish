import React, { Component } from "react";

import { Padding, Center } from "react-flutterish";

export default class App extends Component {
  render() {
    return (
      <Center>
        {/* <Padding val={20}>Modern React component module</Padding> */}
        <div style={{ height: 300, width: 300, backgroundColor: "red" }} />
      </Center>
    );
  }
}
