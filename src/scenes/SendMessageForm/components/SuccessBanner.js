import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import Banner from 'shared/components/Banner';

const EmojiWrapper = styled.span`
  font-size: 25px;
  margin-right: ${prop('theme.spacing.0')};
`;

const SuccessBanner = () => (
  <Banner>
    <EmojiWrapper>
      <span role="img" aria-label="success">
        😎
      </span>
    </EmojiWrapper>
    Your message was sent successfully
  </Banner>
);

export default SuccessBanner;
