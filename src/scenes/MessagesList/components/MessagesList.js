import React from 'react';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import { status as statusPropType } from 'customPropTypes';
import { PENDING } from 'app-constants';
import { TransitionGroup } from 'react-transition-group';
import { H1 } from 'style/Headers';
import MessagesLoading from './MessagesLoading';
import Message from './Message';
import SlideIn from './SlideIn';

const Wrapper = styled.div`
  position: relative;
`;

const MessagesList = ({ messages, status }) => (
  <Wrapper>
    <H1>Messages</H1>
    {messages.length > 0 && (
      <TransitionGroup>
        {messages.map(message => (
          <SlideIn key={`message-list-${message.id}`}>
            <Message {...message} />
          </SlideIn>
        ))}
      </TransitionGroup>
    )}
    {status === PENDING && <MessagesLoading />}
  </Wrapper>
);

MessagesList.propTypes = {
  messages: arrayOf(shape(Message.propTypes)).isRequired,
  status: statusPropType.isRequired,
};

export default MessagesList;
