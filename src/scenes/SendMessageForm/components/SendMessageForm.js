import React from 'react';
import { func, instanceOf } from 'prop-types';
import { OK, ERROR, PENDING } from 'app-constants';
import { status as statusPropType } from 'customPropTypes';
import styled from 'styled-components';
import { H1 } from 'style/Headers';
import { smallUp } from 'style/breakpoints';
import LoadingButton from 'shared/components/LoadingButton';
import { Form, TextArea, SubmitButton, PhoneInput } from 'style/Form';
import { ContentCard } from 'style/Cards';
import SuccessBanner from './SuccessBanner';
import ErrorBanner from './ErrorBanner';

/**
 * Super crappy way of formatting a phone number to a normal string
 * Should be done in a decent way in a real app
 * @param {String} number - The phone number to format
 */
function formatPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/\s/g, '').replace('+', '00');
}

const Wrapper = styled.div`
  ${smallUp`
    position: sticky;
    top: 50px;
  `};
`;

class SendMessageForm extends React.Component {
  static propTypes = {
    status: statusPropType.isRequired,
    error: instanceOf(Error),
    sendMessage: func.isRequired,
  };

  static defaultProps = {
    error: null,
  };

  state = {
    recipient: '',
    body: '',
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === OK && this.props.status !== OK) {
      // Reset the form if all is GOOD
      this.setState({
        recipient: '',
        body: '',
      });
    }
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleChange = phoneNumber => {
    this.setState({
      recipient: phoneNumber,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { recipient, body } = this.state;
    const formattedRecipient = formatPhoneNumber(recipient);

    // TODO: Could do some additional validation before calling the action

    this.props.sendMessage(formattedRecipient, body);
  };

  render() {
    const { status, error } = this.props;
    const { recipient, body } = this.state;

    return (
      <Wrapper>
        <H1>Send a message</H1>
        <ContentCard>
          {status === OK && <SuccessBanner />}
          {status === ERROR &&
            !!error && <ErrorBanner message={error.toString()} />}
          <Form onSubmit={this.handleSubmit}>
            <PhoneInput
              name="recipient"
              defaultCountry="nl"
              onChange={this.handleChange}
              value={recipient}
            />
            <TextArea
              placeholder="Body"
              name="body"
              required
              value={body}
              onChange={this.handleInputChange}
            />
            <LoadingButton
              component={SubmitButton}
              isLoading={status === PENDING}
            >
              Send message
            </LoadingButton>
          </Form>
        </ContentCard>
      </Wrapper>
    );
  }
}

export default SendMessageForm;
