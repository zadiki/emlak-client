/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/user';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e) {
		const { login } = this.props;
		e.preventDefault();
		login(this.state);
	}

	render() {
		return (
			<div>
				<LoginForm onChange={this.onChange} onSubmit={this.onSubmit} />
			</div>
		);
	}
}
LoginPage.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired
};

export default connect(
	null,
	{ login }
)(LoginPage);
