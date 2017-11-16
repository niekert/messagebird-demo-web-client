import React from 'react';
import { number, string } from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.div`
  position: relative;
  font-size: 0;
  color: #fff;
  width: ${prop('width')}px;
  height: ${prop('height')}px;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Ball = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  border-width: 2px;
  border: ${prop('lineWidth')}px solid currentColor;
  border-bottom-color: transparent;
  border-radius: 100%;
  animation: ${rotate} 0.75s linear infinite;
`;

const Spinner = ({ width, height, className, lineWidth }) => (
  <Wrapper width={width} height={height} className={className}>
    <Ball lineWidth={lineWidth} />
  </Wrapper>
);

Spinner.propTypes = {
  className: string,
  width: number,
  height: number,
  lineWidth: number,
};

Spinner.defaultProps = {
  className: null,
  width: 32,
  height: 32,
  lineWidth: 1,
};

export default Spinner;
