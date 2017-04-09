import React, { Component } from 'react';

import Clock from './../Clock/Clock';
import Controls from './../Controls/Controls';

import './Timer.scss';

class Timer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      timerStatus: 'paused'
    };
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ count: 0 });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({ 
        count: newCount
      });
    }, 1000);
  };

  handleStatusChange = (status) => {
    console.log(status);
    this.setState({
      timerStatus: status
    });
  }

  render() {
    const { count, timerStatus } = this.state;
    return (
      <div className="timer-container">
        <Clock totalSeconds={ count }/>
        <Controls onHandleStatusChange={ this.handleStatusChange } countStatus={ timerStatus }/>
      </div>
    );
  }
}

export default Timer;
