import React from 'react';
import { INITIAL } from 'app-constants';
import { shallow } from 'enzyme';
import SendMessageForm from '../SendMessageForm';

describe('<SendMessageForm />', () => {
  let props;
  beforeEach(() => {
    props = {
      status: INITIAL,
      sendMessage: jest.fn(),
    };
  });

  test('renders correctly', () => {
    const wrapper = shallow(<SendMessageForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Sends a message on submit', () => {
    const wrapper = shallow(<SendMessageForm {...props} />);
    wrapper.setState({ recipient: '0634322664', body: 'nice message wow' });

    wrapper.instance().handleSubmit({ preventDefault: () => {} });

    expect(props.sendMessage).toHaveBeenCalledTimes(1);
    expect(props.sendMessage).toHaveBeenLastCalledWith(
      '0634322664',
      'nice message wow',
    );
  });
});
