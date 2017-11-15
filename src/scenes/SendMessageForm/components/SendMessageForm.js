import React from 'react';
import { func } from 'prop-types';
import { H1 } from 'style/Headers';
import { Form, Input, TextArea, SubmitButton } from 'style/Form';
import { ContentCard } from 'style/Cards';

class SendMessageForm extends React.Component {
  static propTypes = {
    sendMessage: func.isRequired,
  };

  state = {
    recipient: '',
    originator: '',
    body: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { recipient, originator, body } = this.state;

    // TODO: Maybe some additional validations
    this.props.sendMessage(recipient, originator, body);
  };

  render() {
    const { recipient, originator, body } = this.state;

    return (
      <ContentCard>
        <H1>Send a message</H1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            placeholder="Recipient"
            name="recipient"
            required
            onChange={this.handleInputChange}
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
