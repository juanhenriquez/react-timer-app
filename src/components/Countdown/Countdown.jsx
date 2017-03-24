import React, { Component } from 'react';

import Clock from './../Clock/Clock';

import './countdown.scss';

class Countdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="countdown-container">
        <Clock totalSeconds={129}/>
      </div>
    );
  }
}

export default Countdown;
