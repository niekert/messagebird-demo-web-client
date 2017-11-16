import React from 'react';
import { node } from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const SlideInTransition = styled(CSSTransition).attrs({
  classNames: 'slideIn',
  timeout: 500,
})`
  &.slideIn-enter {
    transition: opacity 300ms 200ms ease-in, transform 500ms ease-in;
    position: absolute;
    width: 100%;
    opacity: 0;
    transform: translateY(-5px);
  }

  &.slideIn-enter-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.slideIn-enter-active ~ & {
    transition: transform 500ms ease-out;
    transform: translateY(100%);
  }
`;

const MessageWrapper = styled.div`
  padding-bottom: 15px;
  padding-bottom: ${prop('theme.spacing.1')};
`;

const SlideIn = ({ children, ...props }) => (
  <SlideInTransition {...props}>
    <MessageWrapper>{children}</MessageWrapper>
  </SlideInTransition>
);

SlideIn.propTypes = {
  children: node.isRequired,
};

export default SlideIn;
