import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route } from 'react-router-dom';
import LoginRouter from './LoginRouter';
import HomeRouter from './HomeRouter';
import PropertyRouter from './PropertyRouter';
import UserPropertiesRouter from './UserPropertiesRouter';
import SignUpRouter from './SignUpRouter';
import PasswordConfirmRouter from './PasswordConfirmRouter';
import PropertyCategoryRouter from './PropertyCategoryRouter';

import LoginPage from '../components/pages/LoginPage';
import SignUpPage from '../components/pages/SignUpPage';
import Home from '../components/pages/Home';
import Property from '../components/pages/Property';
import PropertyByCategoryPage from '../components/pages/PropertyByCategoryPage';
import UserProperties from '../components/pages/UserProperties';
import PasswordConfirm from '../components/pages/PasswordConfirm';
import NotFoundPage from '../components/pages/NotFoundPage';

const Router = ({ location }) => (
	<Fragment>
		<Switch>
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
			<PropertyCategoryRouter
				exact
				location={location}
				path="/propertycategory"
				component={PropertyByCategoryPage}
			/>
			<Route path="*" component={NotFoundPage} />
		</Switch>
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
