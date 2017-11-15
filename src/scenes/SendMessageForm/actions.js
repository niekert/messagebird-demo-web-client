import * as messagesApi from 'api/messages';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';

/**
 * Send a text message with the given paramters
 * @param {String} recipient - Phone number(s) of the recipient, comma separated
 * @param {String} originator - Name of the originator
 * @param {String} body - Body of the text
 * @returns {Function} thunk
 */
export function sendMessage(recipient, originator, body) {
  return async dispatch => {
    dispatch({ type: SEND_MESSAGE });

    try {
      const message = await messagesApi.sendMessage(
        recipient.split(','),
        originator,
        body,
      );

      console.log('message is ', message);
    } catch (error) {
      window.error = error;
      console.log('error', error);
      dispatch({
        type: SEND_MESSAGE_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}
