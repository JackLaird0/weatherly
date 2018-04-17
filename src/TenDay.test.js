import React from 'react';
import { shallow } from 'enzyme';
import TenDay from './TenDay';

describe('Ten Day Weather', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = [{
      day: 'Wednesday',
      weatherIcon: 'partlycloudy',
      high: '51',
      low: '32',
    },
    {
      day: 'Thursday', weatherIcon: 'clear', high: '55', low: '51',
    },
    {
      day: 'Friday',
      weatherIcon: 'chancerain',
      high: '57',
      low: '44',
    },
    {
      day: 'Saturday', weatherIcon: 'rain', high: '47', low: '30',
    },
    {
      day: 'Sunday', weatherIcon: 'cloudy', high: '37', low: '22',
    },
    {
      day: 'Monday', weatherIcon: 'clear', high: '35', low: '19',
    },
    {
      day: 'Tuesday',
      weatherIcon: 'partlycloudy',
      high: '32',
      low: '20',
    },
    {
      day: 'Wednesday',
      weatherIcon: 'partlycloudy',
      high: '33',
      low: '26',
    },
    {
      day: 'Thursday', weatherIcon: 'snow', high: '35', low: '23'
    },
    {
      day: 'Friday',
      weatherIcon: 'partlycloudy',
      high: '31',
      low: '18',
    }];

    wrapper = shallow(<TenDay TenDay={data} />);
  });

  it('should only show one div on the page with all the data', () => {
    expect(wrapper.find('div.day-container').length).toEqual(1);
  });

  it('should show 10 day cards on a page', () => {
    expect(wrapper.find('div.day-card')).toHaveLength(10);
  });
});
