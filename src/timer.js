import React from "react";

export default class Timer extends React.Component {
  state = {
    isActive: false,
    secondsElapsed: 100,
    title: "Start"
  };

  getSeconds() {
    return this.state.secondsElapsed;
  }

  startTime = () => {
    this.setState({ isActive: true });

    this.countdown = setInterval(() => {
      this.setState(({ secondsElapsed }) => ({
        secondsElapsed: secondsElapsed - 1,
        title: "Pause"
      }));
    }, 1000);
  };

  pauseTime = () => {
    clearInterval(this.countdown);
    this.setState({ isActive: false, title: "Start" });
  };

  render() {
    return (
      <div className="App">
        <div className="Timer-container">
          <span className="Bloc-timer"> {this.getSeconds()}</span>
        </div>
        <div>
          <button
            className="Button StartButton"
            onClick={this.state.isActive ? this.pauseTime : this.startTime}
            title={this.state.isActive ? "Pause" : "Start"}
          >
            {this.state.title}
          </button>
        </div>
      </div>
    );
  }
}
