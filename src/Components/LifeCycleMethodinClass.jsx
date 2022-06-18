import React, { Component } from "react";
import ChildClassComponent from "./ChildClassComponent.jsx";
export default class LifeCycleMethodsInClass extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),

    };
  }
  componentDidMount() {
    console.log("parent componentDidMount");
    this.clearSetID = setInterval(() => {
      console.log("setInerval");
      this.update();
    }, 5000);

    // setTimeout(() => {
    //   console.log("setTimeout");
    //   clearInterval(this.clearSetID);
    //   this.update();
    // }, 1000);
  }
  componentWillMount() {
    console.log("parentcomponentWillMount");
  }
  componentWillUnmount() {
    console.log("parentcomponentWillUnmount");
  }
  componentDidCatch(error) {
    console.log("parent componentDidCatch");
  }
  update = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString(),
    });
  }
  componentDidUpdate() {
    console.log("parent componentDidUpdate");
  }
  shouldComponentUpdate() {
    console.log("parent shouldComponentUpdate");
    return true
  }
  render() {
    console.log("render");
    const { time } = this.state;
    const { date } = this.state;
    return (
      <h1>
        <p> Parent render Time:{time} </p>
        Parent render date:{date} <br />
        <ChildClassComponent date={date} />
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