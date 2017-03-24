import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

const Sidenav = (props) => {
  return(
    <Drawer open={props.isDrawerOpen} docked={ false } onRequestChange={ props.toggleDrawer }>
      <AppBar
      title="React Timer App" titleStyle={{ fontSize: '20px' }}/>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  );
};

export default Sidenav;