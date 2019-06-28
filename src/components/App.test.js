import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render the correct elements with the correct information', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});