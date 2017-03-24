import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

// components
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Navigation = (props) => {
  return(
    <AppBar
      title="React Timer App"
      onLeftIconButtonTouchTap={ e => props.toggleDrawer() }
      iconStyleRight={ { display: 'flex', alignItems: 'center', margin: 0} }
      iconElementRight={
        <div className="navbar-buttons-container">

          <FlatButton
              label="Timer"
              labelStyle={{ color: '#fff' }}
              className="nav-button"
              containerElement={
                <NavLink exact to="/" activeClassName="active-link"></NavLink>
              }/>


          <FlatButton
              label="Countdown"
              labelStyle={{ color: '#fff' }}
              className="nav-button"
              containerElement={
                <NavLink to="/countdown" activeClassName="active-link"></NavLink>
              }/>
        </div>
      }/>
  );
};

Navigation.propTypes = {
  toggleDrawer: PropTypes.func
};

export default Navigation;
