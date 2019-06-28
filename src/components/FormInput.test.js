import React from 'react';
import { shallow, mount } from 'enzyme';
import FormInput from './FormInput';

describe('FormInput', () => {
  it('should render the correct elements with the correct information', () => {
    const wrapper = shallow(<FormInput />);

    expect(wrapper).toMatchSnapshot();
  });
});