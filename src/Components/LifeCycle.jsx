import React, { Component } from "react";
export default class MethodsInClass extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    // this.state = {
    //   date: new Date().toISOString(),
    // };
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({
      date: new Date().toISOString(),
    });
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  componentDidCatch(error) {
    console.log("componentDidCatch");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }
  render() {
    console.log("render");
    // const { date } = this.state;
    return <div>Text In Render component:</div>;
  }
}

// constructor
// Componentwillmount
// render
// componentsDidUpdate
// if state or props updating, methods will re render
// render


// sequence
// constructor > componentwillmount > render > componentDidUpdate > ShouldComponentUpdate > render......