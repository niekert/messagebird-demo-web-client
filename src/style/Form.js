import styled from 'styled-components';
import { prop } from 'styled-tools';
import { saturate } from 'shared/util/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 2px;
  border: 1px solid ${prop('theme.color.outline')};
  font-size: 16px;
  height: 40px;
  padding: 0 2px 0 10px;
  margin-bottom: ${prop('theme.spacing.1')};
`;

export const TextArea = Input.withComponent('textarea').extend`
  border-width: 2px;
  padding: 10px 10px 20px 10px;
  min-width: 250px;
  min-height: 150px;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 6px 8px;
  font-size: 14px;
  font-weight: 300;
  background: ${prop('theme.bg.cta')};
  color: ${prop('theme.color.cta')};

  &:hover {
    background: ${props => saturate(props.theme.bg.cta, 0.3)};
  }
`;

export const SubmitButton = styled(Button).attrs({
  type: 'submit',
})`
  align-self: flex-start;
`;
