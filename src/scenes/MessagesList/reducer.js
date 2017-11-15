import { createReducer } from 'redux-create-reducer';
import { INITIAL, PENDING, OK, ERROR } from 'app-constants';
import {
  FETCH_MESSAGES_LIST,
  FETCH_MESSAGES_LIST_SUCCESS,
  FETCH_MESSAGES_LIST_ERROR,
  ADD_NEW_MESSAGE,
} from './actions';

const initialState = {
  status: INITIAL,
  messages: [],
};

export default createReducer(initialState, {
  [FETCH_MESSAGES_LIST]() {},
  [FETCH_MESSAGES_LIST_SUCCESS]() {},
  [FETCH_MESSAGES_LIST_ERROR]() {},
  [ADD_NEW_MESSAGE](state, action) {
    return {
      ...state,
      messages: [action.payload.message, ...state.messages],
    };
  },
});
