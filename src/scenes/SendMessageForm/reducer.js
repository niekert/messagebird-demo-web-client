import { createReducer } from 'redux-create-reducer';
import { INITIAL, PENDING, OK, ERROR } from 'app-constants';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_SUCCESS,
} from './actions';

const initialState = {
  status: INITIAL,
  error: null,
};

export default createReducer(initialState, {
  [SEND_MESSAGE]() {
    return {
      status: PENDING,
      error: null,
    };
  },
  [SEND_MESSAGE_SUCCESS]() {
    return {
      status: OK,
      error: null,
    };
  },
  [SEND_MESSAGE_ERROR](state, action) {
    return {
      status: ERROR,
      error: action.payload.error,
    };
  },
});
