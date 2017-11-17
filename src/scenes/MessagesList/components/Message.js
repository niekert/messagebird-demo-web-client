import React from 'react';
import { ContentCard } from 'style/Cards';
import { SentIcon, ReceivedIcon } from 'shared/components/icons';
import TimeAgo from 'shared/components/TimeAgo';
import { string, number, oneOf } from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const StyledCard = styled(ContentCard)`
  display: flex;
  align-items: center;
  height: 110px;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: ${prop('theme.spacing.1')};
`;

const Content = styled.div`
  padding: ${prop('theme.spacing.0')} 0;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Body = styled.p`
  margin: 0;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: ${prop('theme.spacing.0')};
`;

const Time = styled(TimeAgo)`
  font-size: 10px;
  margin-left: ${prop('theme.spacing.1')};
  opacity: 0.8;
`;

function Message({ direction, recipient, body, originator, createdDatetime }) {
  const isSent = direction === 'mt';

  return (
    <StyledCard>
      <IconWrapper>{isSent ? <SentIcon /> : <ReceivedIcon />}</IconWrapper>
      <Content>
        <Label>{isSent ? `To ${recipient}` : `From ${originator}`}</Label>
        <Body>{body}</Body>
      </Content>
      <Time>{createdDatetime}</Time>
    </StyledCard>
  );
}

Message.propTypes = {
  direction: oneOf(['mt', 'mo']).isRequired,
  recipient: number.isRequired,
  body: string.isRequired,
  createdDatetime: string.isRequired,
  originator: string.isRequired,
};

export default Message;
