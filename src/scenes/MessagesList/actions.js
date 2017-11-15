export const FETCH_MESSAGES_LIST = 'FETCH_MESSAGES_LIST';
export const FETCH_MESSAGES_LIST_SUCCESS = 'FETCH_MESSAGES_LIST_SUCCESS';
export const FETCH_MESSAGES_LIST_ERROR = 'FETCH_MESSAGES_LIST_ERROR';

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export function fetchMessages() {
  return async dispatch => {};
}

export function addMessage(message) {
  return {
    type: ADD_NEW_MESSAGE,
    payload: {
      message,
    },
  };
}
