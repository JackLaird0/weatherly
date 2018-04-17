import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App test', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />); //can pass in data here
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should have default state', () => {
    const expectation = {
      todaysWeather: '',
      SevenHourForecast: '',
      TenDayForecast: '',
      WelcomeScreen: false
    };

    expect(renderedApp.state()).toEqual(expectation);
  });

  it('should update the welcome scrren to true if location is passed in', () => {
    let mockPropFunc = jest.fn();
    let changed = mockPropFunc.instance()
    const expectation = true

    expect(changed.state().WelcomeScreen).toEqual(expectation);
  });

});

// npm test -- --coverage