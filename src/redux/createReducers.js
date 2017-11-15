import { combineReducers } from 'redux';
import sendMessageReducer from 'scenes/SendMessageForm/reducer';
import messagesListReducer from 'scenes/MessagesList/reducer';

export default function createReducers() {
  return combineReducers({
    sendMessage: sendMessageReducer,
    messagesList: messagesListReducer,
  });
}
