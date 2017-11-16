import React from 'react';
import { ContentCard } from 'style/Cards';
import { string, number, oneOf } from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled(ContentCard)`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
`;

function Message({ id, direction, recipient, body, originator }) {
  return (
    <StyledCard>
      <span>{direction}</span>
      <p>{body}</p>
    </StyledCard>
  );
}

Message.propTypes = {
  id: string.isRequired,
  direction: oneOf(['mt', 'mo']).isRequired,
  recipient: number.isRequired,
  body: string.isRequired,
  originator: string.isRequired,
};

export default Message;
