import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';

// components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

const Sidenav = (props) => {
  return(
    <Drawer open={props.isDrawerOpen} docked={ false } onRequestChange={ props.toggleDrawer }>
      <AppBar
          title="React Timer App" titleStyle={{ fontSize: '20px' }}
          onTitleTouchTap={e => props.toggleDrawer()}
          onLeftIconButtonTouchTap={e => props.toggleDrawer()}/>
      <MenuItem>
        <NavLink to="/">Timer</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/countdown">Countdown</NavLink>
      </MenuItem>
    </Drawer>
  );
};

Sidenav.propTypes = {
  isDrawerOpen: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

export default Sidenav;
