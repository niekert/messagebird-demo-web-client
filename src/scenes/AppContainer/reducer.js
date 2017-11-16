import { createReducer } from 'redux-create-reducer';
import {
  API_KEY_STORAGE_KEY,
  INITIAL,
  PENDING,
  ERROR,
  OK,
} from 'app-constants';
import {
  AUTHENTICATE,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR,
} from './actions';

const storedKey = localStorage.getItem(API_KEY_STORAGE_KEY);

const initialState = {
  apiKey: storedKey,
  isAuthenticated: !!storedKey, // By default we assume a user is authenticated if a key is in store
  status: INITIAL,
};

export default createReducer(initialState, {
  [AUTHENTICATE](state) {
    return {
      ...state,
      status: PENDING,
    };
  },
  [AUTHENTICATE_SUCCESS](state, action) {
    const { apiKey } = action.payload;

    return {
      ...state,
      status: OK,
      isAuthenticated: true,
      apiKey,
    };
  },
  [AUTHENTICATE_ERROR](state, action) {
    return {
      ...state,
      status: ERROR,
      isAuthenticated: false,
      errorMessage: action.payload.errorMessage,
    };
  },
});
