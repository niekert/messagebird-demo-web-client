import React from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './actions';
import SendMessageForm from './components/SendMessageForm';

const mapStateToProps = state => state;

// TODO: Implement container logic for SendMessageForm component

export default connect(mapStateToProps, { sendMessage })(SendMessageForm);
