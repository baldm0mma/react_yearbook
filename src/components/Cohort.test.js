import React from 'react';
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort';

describe('Cohort', () => {
  it('should render the correct elements with the correct information', () => {
    const wrapper = shallow(<Cohort staff={ [] } students={ [] }/>);

    expect(wrapper).toMatchSnapshot();
  });
});