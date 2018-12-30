import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './router/Router';
import store from './Store';

const App = () => (
  <div className="container-fluid">
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  </div>
);
export default App;
