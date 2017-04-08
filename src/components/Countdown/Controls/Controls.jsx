import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import './Controls.scss';

const Controls = (props) => {
  let { countdownStatus, onHandleStatusChange } = props;
  
  const renderStartStopButton = () => {
    if (countdownStatus === 'started') {
      return (
        <RaisedButton 
          id="pause-button"
          className="controls__button" 
          label="Pause" 
          primary={true} 
          onClick={ (e) => onHandleStatusChange('paused') }/>
      );
    } else if (countdownStatus === 'paused') {
      return (
        <RaisedButton 
          id="start-button"
          className="controls__button" 
          label="Start" 
          primary={true} 
          onClick={ (e) => onHandleStatusChange('started') }/>
      ); 
    }
  }; 

  return (
    <div id="controls-container">
      { renderStartStopButton() }
      <RaisedButton 
        id="clear-button"
        className="controls__button" 
        label="Clear" 
        secondary={true} onClick={ (e) => onHandleStatusChange('stopped') }/>
    </div>
  );
};

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onHandleStatusChange: React.PropTypes.func.isRequired
};

export default Controls;