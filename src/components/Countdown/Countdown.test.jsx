import React from 'react';
import ReactDOM from 'react-dom';

import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

import $ from 'jquery';

import Countdown from './Countdown';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountDown', () => {
    it('should set state to started and countdown', (done) => {
      const wrapper = shallow(<Countdown/>);
      const component = wrapper.instance();

      component.handleSetCountdown(10);
      expect(component.state.count).toBe(10);
      expect(component.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(component.state.count).toBe(9);
        done();
      }, 1000);
    });

    it('should never set count less than 0', (done) => {
      const wrapper = shallow(<Countdown/>);
      const component = wrapper.instance();

      component.handleSetCountdown(1);

      setTimeout(() => {
        expect(component.state.count).toBe(0);
        done();
      }, 2000);

    })
  });

});
