import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import App from './App';

describe('Current Weather', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      location: 'aromas, ca',
      day: 'monday',
      currentTemp: 68,
      high: 78,
      low: 35,
      description: 'sunny with some clouds',
      weatherIcon: 'img.png',
    };

    wrapper = shallow(<CurrentWeather location={props.location}
      day={props.day}
      currentTemp={props.currentTemp}
      high={props.high}
      low={props.low}
      description={props.description}
      weatherIcon={props.weatherIcon} />);
  });

  it('should take in props', () => {
    expect(wrapper.find('div.weather-card').length).toEqual(1);
  });

  it('should display the current data', () => {
    let expectation = ' aromas, ca ';

    expect(wrapper.find('p.location').text()).toEqual(expectation);
  });

  it('should show the current temp', () => {
    let expectation = ' 68° F ';

    expect(wrapper.find('p.temp').text()).toEqual(expectation);
  });

  it('should show a description of the weather', () => {
    let expectation = ' sunny with some clouds ';

    expect(wrapper.find('p.description').text()).toEqual(expectation);
  });
});
