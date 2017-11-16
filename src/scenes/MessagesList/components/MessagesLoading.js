import React from 'react';
import Spinner from 'shared/components/Spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledSpinner = styled(Spinner)`
  width: 50px;
  height: 50px;
  margin: 0 auto;
`;

const MessagesLoading = () => (
  <Wrapper>
    <StyledSpinner lineWidth={4} />
  </Wrapper>
);

export default MessagesLoading;
