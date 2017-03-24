import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link, IndexLink } from 'react-router';

const Navigation = (props) => {
  return(
    <AppBar
      title="React Timer App"
      onLeftIconButtonTouchTap={ e => props.toggleDrawer() }
      iconStyleRight={ { display: 'flex', alignItems: 'center', margin: 0} }
      iconElementRight={
        <div className="navbar-buttons-container">
          <FlatButton label="Timer" labelStyle={{ color: '#fff' }}/>
          <FlatButton label="Countdown" labelStyle={{ color: '#fff' }}/>
        </div>
      }/>
  );
};  

export default Navigation;