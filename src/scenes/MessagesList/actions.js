import * as messagesApi from 'api/messages';
import formatMessage from 'shared/util/formatMessage';

export const FETCH_MESSAGES_LIST = 'FETCH_MESSAGES_LIST';
export const FETCH_MESSAGES_LIST_SUCCESS = 'FETCH_MESSAGES_LIST_SUCCESS';
export const FETCH_MESSAGES_LIST_ERROR = 'FETCH_MESSAGES_LIST_ERROR';

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export function fetchMessages() {
  return async dispatch => {
    dispatch({ type: FETCH_MESSAGES_LIST });

    try {
      const response = await messagesApi.fetchMessages();

      dispatch({
        type: FETCH_MESSAGES_LIST_SUCCESS,
        payload: {
          messages: response.items.map(formatMessage),
          nextUrl: response.links.next,
        },
      });
    } catch (error) {
      dispatch({ type: FETCH_MESSAGES_LIST_ERROR, payload: error });
    }
  };
}

export function addMessage(message) {
  return {
    type: ADD_NEW_MESSAGE,
    payload: {
      message,
    },
  };
}
