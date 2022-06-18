import React, { Component } from "react";
export default class MethodsInClass extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),

    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.clearSetID = setInterval(() => {
      console.log("setInerval");
      this.update();
    }, 1000);

    // setTimeout(() => {
    //   console.log("setTimeout");
    //   clearInterval(this.clearSetID);
    //   this.update();
    // }, 5000);
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidCatch(error) {
    console.log("componentDidCatch");
  }
  update = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true
  }
  render() {
    console.log("render");
    const { time } = this.state;
    const { date } = this.state;
    return (
      <h1>
        <p>Time:{time} </p>
        date:{date}
      </h1>
    )
  }
}
// constructor
// Componentwillmount
// render
// componentsDidUpdate
// if state or props updating, methods will re render
// render


// sequence
// constructor > componentwillmount > render > componentDidUpdate > ShouldComponentUpdate > render.....