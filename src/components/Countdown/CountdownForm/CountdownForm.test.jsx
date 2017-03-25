import React from 'react';
import ReactDOM from 'react-dom';

import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import $ from 'jquery';

import CountdownForm from './CountdownForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  })

  it('should call onSetSeconds if submit event has been triggered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(
      <MuiThemeProvider>
        <CountdownForm onSetSeconds={ spy }/>
      </MuiThemeProvider>
    );
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    TestUtils.Simulate.submit($el.find('form').prevObject[0]);
    expect(spy).toHaveBeenCalled();
  });

  it('should not call onSetSeconds if submit event has not been triggered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(
      <MuiThemeProvider>
        <CountdownForm onSetSeconds={ spy }/>
      </MuiThemeProvider>
    );
    const $el = $(ReactDOM.findDOMNode(countdownForm));

    expect(spy).toNotHaveBeenCalled();
  });
});
