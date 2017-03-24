import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components
import Timer from './../Timer/Timer';
import Countdown from './../Countdown/Countdown';
import Navigation from './../Navigation/Navigation';
import Sidenav from './../Sidenav/Sidenav';
import RaisedButton from 'material-ui/RaisedButton';

import './app.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false
    };
  }

  toggleDrawer = () => {
    this.setState({
      isDrawerOpen: !this.state.isDrawerOpen
    });
  };

  render() {
    return (
      <div className="app-container">
        <Navigation toggleDrawer={this.toggleDrawer}/>
        <Sidenav isDrawerOpen={ this.state.isDrawerOpen } toggleDrawer={this.toggleDrawer}/>

        <Route exact path="/" component={Timer}></Route>
        <Route path="/countdown" component={Countdown}></Route>
      </div>
    );
  }
}

export default App;
