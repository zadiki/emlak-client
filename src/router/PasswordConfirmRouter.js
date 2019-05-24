import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const PasswordConfirmRouter = props => <Route {...props} />;

function mapStatetoProps(state) {
	return { isAuthenticated: state.user.isAuthenticated };
}
export default connect(mapStatetoProps)(PasswordConfirmRouter);
