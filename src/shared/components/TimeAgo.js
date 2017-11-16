import React from 'react';
import { string } from 'prop-types';
import timeAgo from 'timeago.js';

// Really annoying API
const timeagoInstance = timeAgo();

function TimeAgo({ children: date, ...props }) {
  return (
    <time dateTime={date} {...props}>
      {timeagoInstance.format(date)}
    </time>
  );
}

TimeAgo.propTypes = {
  /**
   * The current date/time in an RFC string
   */
  children: string.isRequired,
};

export default TimeAgo;
