import React, { Component } from 'react'

export default class MethodsInClass extends Component {
<<<<<<< HEAD
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
    console.log("componentDidMount");
    this.setState({
      date: new Date().toISOString(),
    });
  }
  render() {
    console.log("render");
    const { date } = this.state;
    return <div>Text In Render component{date}</div>;
  }
=======
    render() {
        return (
            <div>
                Text In component
            </div>
        )
    }
>>>>>>> parent of 3932c77 (components)
}
