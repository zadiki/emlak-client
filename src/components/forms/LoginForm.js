import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onChange, onSubmit }) => (
    <div>
      <form onSubmit={onSubmit} className="login-form">
        <div className="card card-default">
          <div className="card-body">
            <div className="form-group">
              <input
                type="email"
                name="email"
                onChange={onChange}
                autoComplete="username"
                required
                placeholder="example@example.com"
                className="form-username form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                onChange={onChange}
                required
                placeholder="password"
                autoComplete="new-password"
                className="form-username form-control"
              />
            </div>
            <button type="submit" className="btn  btn-success btn-block">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );

LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired
};

export default LoginForm;
