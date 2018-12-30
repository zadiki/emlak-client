import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const LoginRouter = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

function mapStatetoProps(state) {
  return { isAuthenticated: state.user.isAuthenticated };
}
export default connect(mapStatetoProps)(LoginRouter);
