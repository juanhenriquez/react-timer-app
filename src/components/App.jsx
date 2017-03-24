import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// components
import Timer from './Timer';
import Countdown from './Countdown';
import Navigation from './Navigation';
import Sidenav from './Sidenav';
import RaisedButton from 'material-ui/RaisedButton';
import '../../styles/index.scss';

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
      <div>
        <Navigation toggleDrawer={this.toggleDrawer}/>
        <Sidenav isDrawerOpen={ this.state.isDrawerOpen } toggleDrawer={this.toggleDrawer}/>

        <Route exact path="/" component={Timer}></Route>
        <Route path="/countdown" component={Countdown}></Route>
      </div>
    );
  }
}

export default App;
