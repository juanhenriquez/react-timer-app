import React, { Component, PropTypes } from 'react';

// styles
import './clock.scss';

class Clock extends Component {

  static defaultProps = {
    ...Component.defaultProps,
    totalSeconds: 0
  };

  constructor(props) {
    super(props);
  }

  formatSeconds(totalSeconds) {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${minutes}:${seconds}`;
  }

  render() {
    const { totalSeconds } = this.props;
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }

  static propTypes = {
    totalSeconds: PropTypes.number
  };
}

export default Clock;
