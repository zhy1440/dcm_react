import React, { Component } from "react";

class TickingClock extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date().toLocaleTimeString() };
  }

  tick() {
    this.setState({
      currentTime: new Date().toLocaleString("zh-CN", {
        timeZone: "Asia/Shanghai",
        hour12: false
      })
    });
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div>{this.state.currentTime}</div>;
  }
}

export default TickingClock;
