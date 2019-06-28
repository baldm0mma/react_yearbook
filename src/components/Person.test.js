import React from 'react';
import { shallow, mount } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should render the correct elements with the correct information', () => {
    const wrapper = shallow(<Person />);

    expect(wrapper).toMatchSnapshot();
  });
});