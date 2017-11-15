import React from 'react';
import { arrayOf, shape } from 'prop-types';
import { H1 } from 'style/Headers';
import Spinner from 'shared/components/Spinner';
import Message from './Message';

const MessagesList = ({ messages }) => (
  <div>
    <H1>Your messages</H1>
    {messages.map(message => (
      <Message key={`message-list-${message.id}`} {...message} />
    ))}
    <Spinner />
  </div>
);

MessagesList.propTypes = {
  messages: arrayOf(shape(Message.propTypes)).isRequired,
};

export default MessagesList;
