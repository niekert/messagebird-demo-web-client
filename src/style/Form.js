import styled from 'styled-components';
import ReactPhoneInput from 'react-telephone-input/lib/withStyles';
import { prop } from 'styled-tools';
import { saturate } from 'shared/util/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 2px;
  border: 1px solid ${prop('theme.color.outline')};
  font-family: inherit;
  font-size: 16px;
  height: 40px;
  padding: 0 2px 0 10px;
  margin-bottom: ${prop('theme.spacing.1')};
`;

export const TextArea = Input.withComponent('textarea').extend`
  font-family: inherit;
  border-width: 2px;
  padding: 10px 10px 20px 10px;
  min-width: 250px;
  min-height: 150px;
`;

export const ErrorLabel = styled.span`
  font-size: ${prop('theme.fs.small')};
  color: ${prop('theme.color.error')};
`;

export const Button = styled.button`
  position: relative;
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

// We need to jump a lot of hoops to get this component to be styled properly 😔
export const PhoneInput = Input.withComponent(ReactPhoneInput).extend`
  padding-left: 0;
  width: auto !important;

  & > .flag-dropdown {
    display: flex;
    align-items: center;
  }

  & .selected-flag {
    height: 100%;
  }

  & > input {
    font-family: inherit !important;
    font-size: 16px !important;
    border: none !important;
    box-shadow: none !important;
    height: 100% !important;
  }
`;
