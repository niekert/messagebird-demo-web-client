import { combineReducers } from 'redux';
import appReducer from 'scenes/AppContainer/reducer';
import sendMessageReducer from 'scenes/SendMessageForm/reducer';
import messagesListReducer from 'scenes/MessagesList/reducer';

export default function createReducers() {
  return combineReducers({
    sendMessage: sendMessageReducer,
    messagesList: messagesListReducer,
    app: appReducer,
  });
}
