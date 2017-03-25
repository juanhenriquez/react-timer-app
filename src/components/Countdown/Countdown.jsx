import React, { Component } from 'react';

import Clock from './Clock/Clock';
import CountdownForm from './CountdownForm/CountdownForm';

import './countdown.scss';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleSetCountdown = (seconds) => {
    this.setState({ count: seconds });
  };

  handleSetSeconds = (e) => {
    e.preventDefault();
    let strSeconds = e.target.seconds.value;
    if (strSeconds && strSeconds.match(/^[0-9]*$/)) {
      e.target.seconds.value = "";
      this.handleSetCountdown(parseInt(strSeconds, 10));
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div className="countdown-container">
        <Clock totalSeconds={ count }/>
        <CountdownForm onSetSeconds={ this.handleSetSeconds }/>
      </div>
    );
  }
}

export default Countdown;
