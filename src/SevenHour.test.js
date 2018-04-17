import React from 'react';
import { shallow } from 'enzyme';
import SevenHour from './SevenHour';

describe('Seven Hour Weather', () => {
  let wrapper;
  let data;

  beforeEach(() => {
    data = [ 
      { hour: '12:00 PM', weatherIcon: 'partlycloudy', forecastTemp: '47' },
      { hour: '1:00 PM', weatherIcon: 'partlycloudy', forecastTemp: '49' },
      { hour: '2:00 PM', weatherIcon: 'partlycloudy', forecastTemp: '49' },
      { hour: '3:00 PM', weatherIcon: 'clear', forecastTemp: '51' },
      { hour: '4:00 PM', weatherIcon: 'clear', forecastTemp: '50' },
      { hour: '5:00 PM', weatherIcon: 'clear', forecastTemp: '48' },
      { hour: '6:00 PM', weatherIcon: 'clear', forecastTemp: '45' },
    ];

    wrapper = shallow(<SevenHour SevenHour = { data }/>);
  });

  it('should only show one div on the page with all the data', () => {
    expect(wrapper.find('div.hour-container').length).toEqual(1);
  });

  it('should show 7 hour cards on a page', () => {
    expect(wrapper.find('h2.hour')).toHaveLength(7);
  });
});
