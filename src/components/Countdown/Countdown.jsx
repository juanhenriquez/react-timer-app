import React, { Component } from 'react';

import Clock from './../Clock/Clock';
import CountdownForm from './CountdownForm/CountdownForm';
import Controls from './../Controls/Controls';

import './countdown.scss';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      countdownStatus: 'stopped'
    };
  }

  componentWillMount () {
    console.log('Mount Component');
  }

  componentDidMount () {
    console.log('Finish Component Mounting');
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('The component will be updated');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('The component has been updated');
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
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
  };

  componentWillUnmount () {
    console.log("Remove component");
    clearInterval(this.timer);
    this.timer = undefined;
  }

  handleStatusChange = (newStatus) => {
    this.setState({
      countdownStatus: newStatus
    });
  };

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({ 
        count: newCount >= 0 ? newCount : 0 
      });

      if (newCount === 0) {
        this.setState({ countdownStatus: 'stopped' });
      }

    }, 1000);
  };

  handleSetCountdown = (seconds) => this.setState({ count: seconds, countdownStatus: 'started' });

  handleSetSeconds = (e) => {
    e.preventDefault();
    let strSeconds = e.target.seconds.value;
    if (strSeconds && strSeconds.match(/^[0-9]*$/)) {
      e.target.seconds.value = "";
      this.handleSetCountdown(parseInt(strSeconds, 10));
    }
  };

  render() {
    const { count, countdownStatus } = this.state;

    const renderControlsComponent = () => {
      if (countdownStatus !== 'stopped') {
        return (
          <Controls onHandleStatusChange={ this.handleStatusChange } countStatus={ countdownStatus }/>
        );
      } else {
        return <CountdownForm onSetSeconds={ this.handleSetSeconds }/>;
      }
    };

    return (
      <div className="countdown-container">
        <Clock totalSeconds={ count }/>
        { renderControlsComponent() }
      </div>
    );
  }
}

export default Countdown;
