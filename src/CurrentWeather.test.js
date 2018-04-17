import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import App from './App';

describe('Current Weather', () => {
  let renderedApp;

  beforeEach(() => {
    const props = { todaysWeather: '', 
                    SevenHourForecast: '',
                    TenDayForecast: '',
                    WelcomeScreen: false
                  } 

    renderedApp = shallow(<App {...props }/>); //can pass in data here
  });

  it('should take in props', () => {
    expect(renderedApp).toEqual(undefined)
  });


});
