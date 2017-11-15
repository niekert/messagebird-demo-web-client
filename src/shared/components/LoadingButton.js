import React from 'react';
import { Button } from 'style/Form';
import { bool, func, string, oneOfType, node } from 'prop-types';
import styled from 'styled-components';
import Spinner from 'shared/components/Spinner';
import { ifProp } from 'styled-tools';

const ChildWrapper = styled.span`
  display: block;
  opacity: ${ifProp('hidden', 0, 1)};
`;

const SpinnerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled(Spinner)`
  margin: 0 auto;
  width: 16px;
  height: 16px;
`;

const LoadingButton = ({
  component: Component,
  isLoading,
  children,
  ...props
}) => (
  <Component disabled={isLoading} {...props}>
    {isLoading && (
      <SpinnerContainer>
        <StyledSpinner />
      </SpinnerContainer>
    )}
    <ChildWrapper hidden={isLoading}>{children}</ChildWrapper>
  </Component>
);

LoadingButton.propTypes = {
  /**
   * Component can be any react component (or element as string) to use
   */
  component: oneOfType([func, string]),
  children: node,
  isLoading: bool,
};

LoadingButton.defaultProps = {
  component: Button,
  isLoading: false,
  children: null,
};

export default LoadingButton;
