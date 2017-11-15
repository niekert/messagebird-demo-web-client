import React from 'react';
import { number, string, node, oneOf } from 'prop-types';
import { OK, ERROR } from 'app-constants';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { prop } from 'styled-tools';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 100%;
  margin: 0 ${prop('theme.spacing.1')};
  padding: ${prop('theme.spacing.1')};
  box-shadow: ${prop('theme.shadows.0')};
  display: flex;
  align-items: center;
  color: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-size: 12px;

  background: ${props =>
    props.type === OK ? props.theme.bg.success : props.theme.color.error};
  &.fade-enter {
    background: green;
  }

  &.fade-leave {
    background: green;
  }
`;

const Slide = styled(CSSTransition).attrs({
  classNames: 'slide',
  timeout: 150,
})`
  transition: transform 150ms cubic-bezier(0.2, 1.35, 0.68, 1);

  &.slide-appear {
    opacity: 0;
    transform: translateY(-100%);
  }
  &.slide-appear-active {
    opacity: 1;
    transform: translateY(0);
  }

  &.slide-exit {
    transform: translateY(0);
  }
  &.slide-exit-active {
    transform: translateY(-100%);
  }
`;

class Banner extends React.Component {
  static propTypes = {
    durationMs: number,
    className: string,
    type: oneOf([OK, ERROR]),
    children: node,
  };

  static defaultProps = {
    durationMs: 5000,
    className: null,
    type: OK,
    children: null,
  };

  state = {
    isHidden: false,
  };

  componentDidMount() {
    this.hideTimeout = setTimeout(() => {
      this.setState({ isHidden: true });
    }, this.props.durationMs);
  }

  componentWillUnmount() {
    clearTimeout(this.hideTimeout);
  }

  render() {
    const { isHidden } = this.state;
    return (
      <TransitionGroup>
        {!isHidden && (
          <Slide in={!isHidden} appear>
            <Wrapper type={this.props.type} className={this.props.className}>
              {this.props.children}
            </Wrapper>
          </Slide>
        )}
      </TransitionGroup>
    );
  }
}

export default Banner;
