import React from 'react';
import { bool, func, string } from 'prop-types';
import { status as statusPropType } from 'customPropTypes';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { API_KEY_STORAGE_KEY } from 'app-constants';
import theme from 'style/theme';
import { authenticate } from './actions';
import App from './components/App';
import AuthForm from './components/AuthForm';

class AppContainer extends React.Component {
  static propTypes = {
    authenticate: func.isRequired,
    errorMessage: string,
    status: statusPropType.isRequired,
    isAuthenticated: bool.isRequired,
  };

  static defaultProps = {
    errorMessage: '',
  };

  componentDidMount() {
    // Ensure we are still authenticated with the backend
    const apiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (apiKey) {
      this.props.authenticate(apiKey);
    }
  }

  render() {
    const { isAuthenticated, errorMessage, status } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {isAuthenticated ? (
          <App />
        ) : (
          <AuthForm
            status={status}
            authenticate={this.props.authenticate}
            errorMessage={errorMessage}
          />
        )}
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  const { app: { isAuthenticated, status, errorMessage } } = state;

  return {
    isAuthenticated,
    errorMessage,
    status,
  };
};

export default connect(mapStateToProps, { authenticate })(AppContainer);
