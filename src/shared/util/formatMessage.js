/**
 * Helper function to simplify the representation of a message.
 * This is not something I'd be doing in production, but for now it's nice to have
 * To simplify the representation of a message object
 * @param {Object} message
 */

const formatMessage = message => ({
  id: message.id,
  direction: message.direction,
  recipient: message.recipients.items[0].recipient, // TODO: this won't be OK in a real app
  body: message.body,
  originator: message.originator,
  createdDatetime: message.createdDatetime,
});

export default formatMessage;
