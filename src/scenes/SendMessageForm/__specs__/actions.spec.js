import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { ADD_NEW_MESSAGE } from 'scenes/MessagesList/actions';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('shared/util/formatMessage', () => () => 'formattedMessage');

describe('SendMessageActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('sendMessage', () => {
    const expectedResponse = 'formattedMessage';
    const mockResponse = { response: expectedResponse };

    fetchMock.postOnce('begin:http://mock/messagebird/messages', mockResponse);

    const store = mockStore({});

    const expectedActions = [
      {
        type: actions.SEND_MESSAGE,
      },
      {
        type: ADD_NEW_MESSAGE,
        payload: {
          message: 'formattedMessage',
        },
      },
      {
        type: actions.SEND_MESSAGE_SUCCESS,
      },
    ];

    return store
      .dispatch(actions.sendMessage('+1911911911', 'body'))
      .then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
