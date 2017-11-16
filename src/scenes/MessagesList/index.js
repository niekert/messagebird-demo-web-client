import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { NEW_MESSAGES_WS_URL } from 'app-constants';
import WebSocket from 'react-websocket';
import { fetchMessages, addMessage } from './actions';
import MessagesList from './components/MessagesList';

function mapStateToProps(state) {
  const { messagesList: { messages, status } } = state;

  return {
    messages,
    status,
  };
}

class MessageListContainer extends React.Component {
  static propTypes = {
    fetchMessages: func.isRequired,
    addMessage: func.isRequired,
  };

  componentDidMount() {
    this.props.fetchMessages();
  }

  onWebsocketMessage = messageJson => {
    console.log('received message', messageJson);
    const { type, data } = JSON.parse(messageJson);
    if (type === 'message') {
      this.props.addMessage(data);
    }

    if (type === 'connect') {
      console.log('websocket connected');
    }
  };

  render() {
    return [
      <MessagesList key="messageslist" {...this.props} />,
      <WebSocket
        key="new-messages-socket"
        url={NEW_MESSAGES_WS_URL}
        onMessage={this.onWebsocketMessage}
      />,
    ];
  }
}

export default connect(mapStateToProps, { fetchMessages, addMessage })(
  MessageListContainer,
);
