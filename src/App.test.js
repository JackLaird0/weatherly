import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App test', () => {
  let renderedApp;

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

  it('should update the welcome screen to true if location is passed in', () => {
    const expectation = true;

    expect(renderedApp.state().WelcomeScreen).toEqual(expectation);
  });
});
