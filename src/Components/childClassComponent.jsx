import React, { Component } from "react";
export default class childClass extends Component {
    constructor(props) {
        super(props);
        console.log("child constructor");

    }
    componentDidMount() {
        console.log("child componentDidMount");
        this.clearSetID = setInterval(() => {
            console.log("setInerval");
            this.update();
        }, 1000);


    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    componentWillReceiveProps(props) {
        console.log("componets will recieve", props);
    }
    componentDidCatch(error) {
        console.log("child componentDidCatch");
    }
    update = () => {
        this.setState({
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
        });
    }
    componentDidUpdate() {
        console.log("child componentDidUpdate");
    }
    shouldComponentUpdate() {
        console.log("child shouldComponentUpdate");
        return true
    }
    render() {
        console.log("render");
        const { time } = this.props;
        const { date } = this.props;
        return (
            <>
                Child in Render Method

            </>
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