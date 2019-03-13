import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LoginRouter from './LoginRouter';
import HomeRouter from './HomeRouter';
import PropertyRouter from './PropertyRouter';
import UserPropertiesRouter from './UserPropertiesRouter';
import SignUpRouter from './SignUpRouter';
import LoginPage from '../components/pages/LoginPage';
import SignUpPage from '../components/pages/SignUpPage';
import Home from '../components/pages/Home';
import Property from '../components/pages/Property';
import UserProperties from '../components/pages/UserProperties';
import PasswordConfirmRouter from './PasswordConfirmRouter';
import PasswordConfirm from '../components/pages/PasswordConfirm';

const Router = ({ location }) => (
	<Fragment>
		<LoginRouter
			exact
			location={location}
			path="/login"
			component={LoginPage}
		/>
		<PasswordConfirmRouter
			exact
			location={location}
			path="/emailconfirmation/:token"
			component={PasswordConfirm}
		/>
		<HomeRouter exact location={location} path="/" component={Home} />
		<SignUpRouter
			exact
			location={location}
			path="/signup"
			component={SignUpPage}
		/>
		<PropertyRouter
			exact
			location={location}
			path="/property/:id"
			component={Property}
		/>
		<UserPropertiesRouter
			exact
			location={location}
			path="/userproperties/:userid"
			component={UserProperties}
		/>
	</Fragment>
);
Router.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
};

function mapStatetoProps(state) {
	return { isAuthenticated: state.user.isAuthenticated };
}
export default withRouter(connect(mapStatetoProps)(Router));
