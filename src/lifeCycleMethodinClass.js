import React, { Component } from "react";

export default class MethodsInClass extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  render() {
    console.log("render");
    return <div>Text In component</div>;
  }
}
