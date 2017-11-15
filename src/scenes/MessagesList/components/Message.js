import React from 'react';
import { string } from 'prop-types';

function Message() {
  return <div>MEssage</div>;
}

Message.propTypes = {
  id: string.isRequired,
  recipient: string.isRequired,
  body: string.isRequired,
  originator: string.isRequired,
};

export default Message;
