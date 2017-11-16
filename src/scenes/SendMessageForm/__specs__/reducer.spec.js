import { INITIAL } from 'app-constants';
import reduce from '../reducer';
import {
  SEND_MESSAGE,
  SEND_MESSAGE_ERROR,
  SEND_MESSAGE_SUCCESS,
} from '../actions';

const initialState = {
  status: INITIAL,
  error: null,
};

describe('sendMessageReducer', () => {
  test(`${SEND_MESSAGE}`, () => {
    const result = reduce(initialState, {
      type: SEND_MESSAGE,
    });

    expect(result).toMatchSnapshot();
  });

  test(`${SEND_MESSAGE_SUCCESS}`, () => {
    const result = reduce(initialState, {
      type: SEND_MESSAGE_SUCCESS,
      payload: { query: 'mock_query ' },
    });

    expect(result).toMatchSnapshot();
  });

  test(`${SEND_MESSAGE_ERROR}`, () => {
    const result = reduce(initialState, {
      type: SEND_MESSAGE_ERROR,
      payload: {
        error: new Error('something went wrong'),
      },
    });

    expect(result).toMatchSnapshot();
  });
});
