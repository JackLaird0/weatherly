import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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
    TenDayForecast: ''
  }

  expect(renderedApp.state()).toEqual(expectation);
});

it('should ', () => {
  const expectation = ;

  expect(renderedApp.state()).toEqual(expectation);
});

// npm test -- --coverage