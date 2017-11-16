import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('<Message />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <Message
        direction="mt"
        recipient={30201}
        body="test message"
        originator="01230123"
        createdDatetime="mock-date-time"
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
