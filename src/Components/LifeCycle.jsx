import React, { Component } from "react";

export default class MethodsInClass extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      date: new Date().toISOString(),
    };
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount function");
    this.setState({
      date: new Date().toISOString(),
    });
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate function");

  }
  render() {
    console.log("render function");
    const { date } = this.state;
    return <div>Text In Render component:{date}</div>;
  }
}

// constructor
// Componentwillmount
// render
// componentsDidUpdate
// if state or props updating, methods will re render
// render