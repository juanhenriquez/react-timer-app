import React from 'react';

import expect from 'expect';
import { shallow, mount } from 'enzyme';

import Timer from './Timer';

describe('Timer', () => {

  it('should exist', () => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    const container = shallow(<Timer />);
    const component = container.instance();

    component.handleStatusChange('started');
    expect(component.state.count).toBe(0);

    setTimeout(() => {
      expect(component.state.timerStatus).toBe('started');
      expect(component.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on pause status', (done) => {
    const container = shallow(<Timer />);
    const component = container.instance();

    component.setState({ count: 10 });
    component.handleStatusChange('started');
    component.handleStatusChange('paused');

    setTimeout(() => {
      expect(component.state.timerStatus).toBe('paused');
      expect(component.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('should clear count on stopped status', (done) => {
    const container = shallow(<Timer />);
    const component = container.instance();

    component.setState({ count: 10 });
    component.handleStatusChange('started');
    component.handleStatusChange('stopped');

    setTimeout(() => {
      expect(component.state.timerStatus).toBe('stopped');
      expect(component.state.count).toBe(0);
      done();
    }, 1001);
  });

});