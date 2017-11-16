import React from 'react';
import { func, string } from 'prop-types';
import { H1 } from 'style/Headers';
import { ContentWrapper } from 'style/Layout';
import { SubmitButton, Form, Input, ErrorLabel } from 'style/Form';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  max-width: 100%;
  width: 500px;
  margin: 0 auto;
`;

class AuthForm extends React.Component {
  static propTypes = {
    authenticate: func.isRequired,
    errorMessage: string,
  };

  static defaultProps = {
    errorMessage: '',
  };

  state = {
    apiKey: '',
  };

  onInputChange = e => {
    this.setState({ apiKey: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.authenticate(this.state.apiKey);
  };

  render() {
    const { apiKey } = this.state;
    const { errorMessage } = this.props;

    return (
      <ContentWrapper>
        <StyledForm onSubmit={this.onSubmit}>
          <H1>Enter the API key to gain access</H1>
          <Input
            type="text"
            value={apiKey}
            placeholder="It's in the mail I sent you if you're supposed to be here 👀"
            onChange={this.onInputChange}
          />
          <SubmitButton>Submit</SubmitButton>
          {!!errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
        </StyledForm>
      </ContentWrapper>
    );
  }
}

export default AuthForm;
