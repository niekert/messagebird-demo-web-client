import React from 'react';
import { func } from 'prop-types';
import { H1 } from 'style/Headers';
import { Form, Input, TextArea, SubmitButton, PhoneInput } from 'style/Form';
import { ContentCard } from 'style/Cards';

/**
 * Super crappy way of formatting a phone number to a normal string
 * Should be done in a decent way in a real app
 * @param {String} number - The phone number to format
 */
function formatPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/\s/g, '').replace('+', '00');
}

class SendMessageForm extends React.Component {
  static propTypes = {
    sendMessage: func.isRequired,
  };

  state = {
    recipient: '+31634322664',
    originator: 'Niek',
    body: 'Prefilled bericht test bla ',
  };

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
    const { recipient, originator, body } = this.state;
    const formattedRecipient = formatPhoneNumber(recipient);

    // TODO: Could do some additional validation before calling the action

    this.props.sendMessage(formattedRecipient, originator, body);
  };

  render() {
    const { recipient, originator, body } = this.state;

    return (
      <ContentCard>
        <H1>Send a message</H1>
        <Form onSubmit={this.handleSubmit}>
          <PhoneInput
            name="recipient"
            defaultCountry="nl"
            onChange={this.handleChange}
            value={recipient}
          />
          <Input
            placeholder="Originator"
            name="originator"
            required
            onChange={this.handleInputChange}
            value={originator}
          />
          <TextArea
            placeholder="Body"
            name="body"
            required
            value={body}
            onChange={this.handleInputChange}
          />
          <SubmitButton>Send message</SubmitButton>
        </Form>
      </ContentCard>
    );
  }
}

export default SendMessageForm;
