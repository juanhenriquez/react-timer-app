import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

// components
import App from './components/App.jsx';
import Timer from './components/Timer';
import Countdown from './components/Countdown';

// third party libraries
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';

injectTapEventPlugin();
render(
  <AppContainer>
    <MuiThemeProvider muiTheme={theme}>
      <Router>
        <Route path="/" component={App}></Route>
      </Router>
    </MuiThemeProvider>
  </AppContainer>,
  document.querySelector("#app")
);

if (module && module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const App = require('./components/App.jsx').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
