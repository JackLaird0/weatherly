import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App test', () => {
  let renderedApp;

  window.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  }

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it('should exist', () => {
    expect(renderedApp).toBeDefined();
  });

  it('should have default state', () => {
    const expectation = {
      todaysWeather: '',
      SevenHourForecast: '',
      TenDayForecast: '',
      WelcomeScreen: true,
    };

    expect(renderedApp.state()).toEqual(expectation);
  });

  // update location

});
