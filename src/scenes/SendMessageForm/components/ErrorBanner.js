import React from 'react';
import { ERROR } from 'app-constants';
import { string } from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import Banner from 'shared/components/Banner';

const EmojiWrapper = styled.span`
  font-size: 25px;
  margin-right: ${prop('theme.spacing.0')};
`;

const ErrorBanner = ({ message }) => (
  <Banner type={ERROR}>
    <EmojiWrapper>
      <span role="img" aria-label="success">
        😔
      </span>
    </EmojiWrapper>
    {message}
  </Banner>
);

ErrorBanner.propTypes = {
  message: string.isRequired,
};

export default ErrorBanner;
