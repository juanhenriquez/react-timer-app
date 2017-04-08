import React from 'react';

import expect from 'expect';
import { shallow, mount } from 'enzyme';

import Countdown from './Countdown';
import CountdownForm from './CountdownForm/CountdownForm';
import Controls from './Controls/Controls';

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

  describe('handleSetSeconds', () => {
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
  });

  describe('handleStatusChange', () => {
    it('should pause the countdown when pass paused to handleStatusChange ', () => {
      const wrapper = shallow(<Countdown />);
      const component = wrapper.instance();

      component.handleStatusChange('paused');
      expect(component.state.countdownStatus).toBe('paused');
    });

    it('should start the countdown when pass started to handleStatusChange ', () => {
      const wrapper = shallow(<Countdown />);
      const component = wrapper.instance();

      component.handleStatusChange('started');
      expect(component.state.countdownStatus).toBe('started');
    });

    it('should stop the countdown when pass stopped to handleStatusChange ', () => {
      const wrapper = shallow(<Countdown />);
      const component = wrapper.instance();

      component.handleStatusChange('stopped');
      expect(component.state.countdownStatus).toBe('stopped');
    });

    it('should render the CountdownForm component when the countdownStatus is "stopped"', () => {
      const wrapper = shallow(<Countdown />);
      const component = wrapper.instance();

      component.handleStatusChange('stopped');
      expect(wrapper.find(CountdownForm).exists()).toBe(true);
    });

    it('should render the Controls component when the countdownStatus is "paused"', () => {
      const wrapper = shallow(<Countdown />);
      const component = wrapper.instance();

      component.handleStatusChange('paused');
      expect(wrapper.find(Controls).exists()).toBe(true);
    });

    it('should render the Controls component when the countdownStatus is "started"', () => {
      const wrapper = shallow(<Countdown />);
      const component = wrapper.instance();

      component.handleStatusChange('started');
      expect(wrapper.find(Controls).exists()).toBe(true);
    });
  });

});
