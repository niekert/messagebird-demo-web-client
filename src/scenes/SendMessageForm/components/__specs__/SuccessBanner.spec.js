import React from 'react';
import { shallow } from 'enzyme';
import SuccessBanner from '../SuccessBanner';

describe('<SuccessBanner />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<SuccessBanner />);
    expect(wrapper).toMatchSnapshot();
  });
});
