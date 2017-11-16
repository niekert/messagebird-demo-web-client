import React from 'react';
import { shallow } from 'enzyme';
import AuthForm from '../AuthForm';

describe('<AuthForm />', () => {
  let props;
  beforeEach(() => {
    props = {
      authenticate: jest.fn(),
      errorMessage: '',
    };
  });

  test('renders correctly', () => {
    const wrapper = shallow(<AuthForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('submits the form when it is filled', () => {
    const wrapper = shallow(<AuthForm {...props} />);
    const mockApiKey = 'so_secure_daym';

    wrapper.setState({ apiKey: mockApiKey });
    wrapper.instance().onSubmit({ preventDefault: () => {} });

    expect(props.authenticate).toHaveBeenCalledTimes(1);
    expect(props.authenticate).toHaveBeenLastCalledWith(mockApiKey);
  });
});
