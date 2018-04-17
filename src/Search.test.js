import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Ten Day Weather', () => {
  let wrapper;
  let data;

  beforeEach(() => {

    wrapper = shallow(<Search />);
  });

  it('should only show one search input', () => {
    expect(wrapper.find('input.search-input').length).toEqual(1);
    expect(wrapper.find('input.search-input').text()).toEqual('');
  });


});
