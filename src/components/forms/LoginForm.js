import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onChange, onSubmit }) => (
	<div className="limiter">
		<div
			className="container-login100"
			style={{ backgroundImage: 'url(\'images/bg-01.jpg\')' }}
		>
			<div className="wrap-login100">
				<form onSubmit={onSubmit} className="login100-form validate-form">
					<span className="login100-form-title p-b-40">Login</span>
					<div
						className="wrap-input100 validate-input m-b-23"
						data-validate="Username is required"
					>
						<span className="label-input100">Username</span>
						<input
							type="email"
							name="email"
							onChange={onChange}
							required
							placeholder="your email"
							className="input100"
						/>
						<span className="focus-input100" data-symbol="&#xf206;" />
					</div>
					<div
						className="wrap-input100 validate-input"
						data-validate="Password is required"
					>
						<span className="label-input100">Password</span>
						<input
							type="password"
							name="password"
							onChange={onChange}
							placeholder="type your password"
							className="input100"
						/>
						<span className="focus-input100" data-symbol="&#xf190;" />
					</div>

					<div className="text-right p-t-6 p-b-25">
						<a href="/">Forgot password?</a>
					</div>
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn" />
							<button type="submit" className="login100-form-btn">
								Login
							</button>
						</div>
					</div>
					<div className="txt1 text-center p-t-1">
						<span>Or Sign Up Using</span>
					</div>

					<div className="flex-c-m">
						<a href="/" className="login100-social-item bg1">
							<i className="fa fa-facebook" />
						</a>

						<a href="/" className="login100-social-item bg2">
							<i className="fa fa-twitter" />
						</a>

						<a href="/" className="login100-social-item bg3">
							<i className="fa fa-google" />
						</a>
					</div>
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="withoutaccount100-bgbtn" />
							<a href="/" className="login100-form-btn">
								Continue with no account
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
);

LoginForm.propTypes = {
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
