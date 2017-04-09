import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import Controls from './Controls';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      const spy = expect.createSpy();
      const wrapper = mount(
        <MuiThemeProvider>
          <Controls countStatus="started" onHandleStatusChange={ spy }/>
        </MuiThemeProvider>
      );
      expect(wrapper.text()).toBe('PauseClear');
    });

    it('should render start button when is paused', () => {
      const spy = expect.createSpy();
      const wrapper = mount(
        <MuiThemeProvider>
          <Controls countStatus="paused" onHandleStatusChange={ spy }/>
        </MuiThemeProvider>
      );
      
      expect(wrapper.text()).toBe('StartClear');
    });
  });

  describe('call controls buttons', () => {
    it('should call onHandleStatusChange when the Start button is clicked', () => {
      const spy = expect.createSpy();
      const wrapper = mount(
        <MuiThemeProvider>
          <Controls countStatus="paused" onHandleStatusChange={ spy }/>
        </MuiThemeProvider>
      );

      const button = wrapper.find('#start-button');
      button.simulate('click');
      expect(spy).toHaveBeenCalled();

    });

    it('should call onHandleStatusChange when the Pause button is clicked', () => {
      const spy = expect.createSpy();
      const wrapper = mount(
        <MuiThemeProvider>
          <Controls countStatus="started" onHandleStatusChange={ spy }/>
        </MuiThemeProvider>
      );

      const button = wrapper.find('#pause-button');
      button.simulate('click');
      expect(spy).toHaveBeenCalled();

    });

    it('should call onHandleStatusChange when the Clear button is clicked', () => {
      const spy = expect.createSpy();
      const wrapper = mount(
        <MuiThemeProvider>
          <Controls countStatus="paused" onHandleStatusChange={ spy }/>
        </MuiThemeProvider>
      );

      const button = wrapper.find('#clear-button');
      button.simulate('click');
      expect(spy).toHaveBeenCalled();

    });
  });

});