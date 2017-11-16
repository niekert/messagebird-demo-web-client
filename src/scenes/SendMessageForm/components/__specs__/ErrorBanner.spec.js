import React from 'react';
import { shallow } from 'enzyme';
import ErrorBanner from '../ErrorBanner';

describe('<ErrorBanner />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<ErrorBanner message="Krakaka" />);
    expect(wrapper).toMatchSnapshot();
  });
});
