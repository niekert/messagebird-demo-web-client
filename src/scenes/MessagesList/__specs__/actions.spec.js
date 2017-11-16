import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockFormatMessageResult = 'FormattedMessage';

jest.mock('shared/util/formatMessage', () => () => mockFormatMessageResult);

describe('SendMessageActions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test('fetchMessages', () => {
    const mockResponse = { items: [1, 2], links: { next: 'next_url' } };

    fetchMock.getOnce('begin:http://mock/messagebird/messages', mockResponse);

    const store = mockStore({});

    const expectedActions = [
      {
        type: actions.FETCH_MESSAGES_LIST,
      },
      {
        type: actions.FETCH_MESSAGES_LIST_SUCCESS,
        payload: {
          messages: [mockFormatMessageResult, mockFormatMessageResult], // We put 2 items in the mock response
          nextUrl: 'next_url',
        },
      },
    ];

    return store.dispatch(actions.fetchMessages()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
