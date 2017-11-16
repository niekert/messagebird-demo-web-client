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
  nextUrl: null,
  error: null,
};

export default createReducer(initialState, {
  [FETCH_MESSAGES_LIST](state) {
    return {
      ...state,
      status: PENDING,
    };
  },
  [FETCH_MESSAGES_LIST_SUCCESS](state, action) {
    const { messages, nextUrl } = action.payload;

    return {
      messages,
      nextUrl,
      error: null,
      status: OK,
    };
  },
  [FETCH_MESSAGES_LIST_ERROR](state) {
    return {
      ...state,
      status: ERROR,
      error: {},
    };
  },
  [ADD_NEW_MESSAGE](state, action) {
    return {
      ...state,
      messages: [action.payload.message, ...state.messages],
    };
  },
});
