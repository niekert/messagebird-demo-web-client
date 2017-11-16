import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotLoaderContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import createStore from 'redux/createStore';
import './index.css';
import App from './scenes/AppContainer';

const store = createStore();

const render = AppComponent => {
  ReactDOM.render(
    <ReactHotLoaderContainer>
      <Provider store={store}>
        <AppComponent />
      </Provider>
    </ReactHotLoaderContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./scenes/AppContainer', () => {
    render(App);
  });
}
