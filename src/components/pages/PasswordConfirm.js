import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { emailConfirm } from '../../actions/user';
import TopNavBar from '../navigation/TopNavBar';
import Footer from '../navigation/Footer';
import LoginPage from './LoginPage';

const PasswordConfirm = props => {
	const {
		match: {
			params: { token }
		},
		emailConfirm
	} = props;
	emailConfirm(token);
	return (
		<Fragment>
			<TopNavBar />
			<LoginPage />
			<Footer />
		</Fragment>
	);
};

PasswordConfirm.propTypes = {
	match: PropTypes.shape().isRequired,
	emailConfirm: PropTypes.func.isRequired
};

export default connect(
	null,
	{ emailConfirm }
)(PasswordConfirm);
