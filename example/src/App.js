import React, { Component } from "react";

import { Padding, Center, Container, Row, Column } from "react-flutterish";

const Ch = [
  <div style={{ backgroundColor: "red", width: 50, height: 50 }} />,
  <div style={{ backgroundColor: "blue", width: 50, height: 50 }} />,
  <div style={{ backgroundColor: "blue", width: 50, height: 50 }} />,
  <div style={{ backgroundColor: "blue", width: 50, height: 50 }} />
];

export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "papayawhip", width: 200, height: 200 }}>
        <Center>
          <Container />
        </Center>
      </div>
    );
  }
}
