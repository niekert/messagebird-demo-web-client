import * as messagesApi from 'api/messages';

export const FETCH_MESSAGES_LIST = 'FETCH_MESSAGES_LIST';
export const FETCH_MESSAGES_LIST_SUCCESS = 'FETCH_MESSAGES_LIST_SUCCESS';
export const FETCH_MESSAGES_LIST_ERROR = 'FETCH_MESSAGES_LIST_ERROR';

export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

/**
 * Format messages to a more basic representation
 * NOTE: Probably won't do it like this here in a real app, but for this example app it's easier
 * @param {Array<Message>} messages - Messages from the Messagebird API
 */
function formatMessages(messages) {
  return messages.map(message => ({
    id: message.id,
    direction: message.direction,
    recipient: message.recipients.items[0].recipient, // TODO: this won't be OK in a real app
    body: message.body,
    originator: message.originator,
  }));
}

export function fetchMessages() {
  return async dispatch => {
    dispatch({ type: FETCH_MESSAGES_LIST });

    try {
      const response = await messagesApi.fetchMessages();

      dispatch({
        type: FETCH_MESSAGES_LIST_SUCCESS,
        payload: {
          messages: formatMessages(response.items),
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
