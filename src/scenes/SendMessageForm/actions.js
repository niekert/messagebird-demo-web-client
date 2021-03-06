import * as messagesApi from 'api/messages';
import formatMessage from 'shared/util//formatMessage';
import { addMessage } from 'scenes/MessagesList/actions';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SEND_MESSAGE_ERROR = 'SEND_MESSAGE_ERROR';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';

/**
 * Send a text message with the given paramters
 * @param {String} recipient - Phone number(s) of the recipient, comma separated
 * @param {String} body - Body of the text
 * @returns {Function} thunk
 */
export function sendMessage(recipient, body) {
  return async dispatch => {
    dispatch({ type: SEND_MESSAGE });

    try {
      const message = await messagesApi.sendMessage(recipient.split(','), body);

      const formattedMessage = formatMessage(message);
      dispatch(addMessage(formattedMessage));

      dispatch({
        type: SEND_MESSAGE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: SEND_MESSAGE_ERROR,
        payload: {
          error,
        },
      });
    }
  };
}
