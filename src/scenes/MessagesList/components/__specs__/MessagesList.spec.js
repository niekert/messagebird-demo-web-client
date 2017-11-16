import React from 'react';
import { OK } from 'app-constants';
import { shallow } from 'enzyme';
import MessagesList from '../MessagesList';
import formattedMessageFixture from 'fixtures/formattedMessage.json';

describe('<MessagesList />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <MessagesList status={OK} messages={[{ ...formattedMessageFixture }]} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
