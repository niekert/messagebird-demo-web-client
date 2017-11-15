import request from './request';

/**
 * Send a text message through the MessageBird api
 * @param {Array<String>} recipients - Array of phone numbers
 * @param {String} originator - Name of the originator
 * @param {String} Body - Body of the text
 * @returns {Promise} Promise including the API response
 */
export function sendMessage(recipients, originator, body) {
  return request('/messagebird/messages', {
    method: 'POST',
    body: JSON.stringify({
      recipients,
      originator,
      body,
    }),
  });
}
