import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './CountdownForm.scss';

const CountdownForm = (props) => {
  return (
    <form onSubmit={ props.onSetSeconds } className="countdown-form">
      <TextField hintText="Enter time in seconds" fullWidth={true} name="seconds"/>
      <RaisedButton type="submit" label="Start" fullWidth={true} secondary={true}/>
    </form>
  );
}

CountdownForm.propTypes = {
  onSetSeconds: PropTypes.func
};



export default CountdownForm;
