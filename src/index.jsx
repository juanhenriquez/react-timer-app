import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './components/App.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';


injectTapEventPlugin();
render( 
  <AppContainer>
    <MuiThemeProvider muiTheme={theme}>
      <App/>
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
