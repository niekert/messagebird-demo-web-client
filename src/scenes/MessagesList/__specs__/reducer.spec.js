import { INITIAL } from 'app-constants';
import {
  FETCH_MESSAGES_LIST,
  FETCH_MESSAGES_LIST_SUCCESS,
  FETCH_MESSAGES_LIST_ERROR,
  ADD_NEW_MESSAGE,
} from '../actions';
import reduce from '../reducer';

const initialState = {
  status: INITIAL,
  messages: [],
  nextUrl: null,
  error: null,
};

describe('messagesListReducer', () => {
  test(`${FETCH_MESSAGES_LIST}`, () => {
    const result = reduce(initialState, {
      type: FETCH_MESSAGES_LIST,
    });

    expect(result).toMatchSnapshot();
  });

  test(`${FETCH_MESSAGES_LIST_SUCCESS}`, () => {
    const result = reduce(initialState, {
      type: FETCH_MESSAGES_LIST_SUCCESS,
      payload: {
        messages: 'mock_messages',
        nextUrl: 'next_url',
      },
    });

    expect(result).toMatchSnapshot();
  });

  test(`${FETCH_MESSAGES_LIST_ERROR}`, () => {
    reduce(initialState, {
      type: FETCH_MESSAGES_LIST_SUCCESS,
      payload: {
        error: new Error('fetch_messages_error'),
      },
    });
  });

  test(`${ADD_NEW_MESSAGE}`, () => {
    const currentState = { ...initialState, messages: ['test'] };
    reduce(currentState, {
      type: ADD_NEW_MESSAGE,
      payload: {
        message: 'wow second message wow',
      },
    });
  });
});
