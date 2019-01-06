import React from 'react';

const SignUpForm = props => (
  <div style={{ marginTop: '-2em' }}>
    <div className="inner-sm">
      <form className="login-form">
        <div className="card card-default">
          <div className="card-body">
            <div className="form-group">
              <input
                type="text"
                name="Fname"
                required
                placeholder="First Name..."
                className="form-username form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Lname"
                required
                placeholder="Last Name..."
                className="form-username form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="Email"
                required
                placeholder="Email..."
                className="form-username form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="Phone"
                pattern="[0]{1}[0-9]{9}"
                required
                placeholder="Phone..."
                className="form-username form-control"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                required
                name="Password"
                placeholder="Password..."
                className="form-password form-control"
              />
            </div>
            <button
              type="submit"
              className="btn btn-block"
              style={{ backgroundColor: '#721c24' }}
            >
              Signup
            </button>
            <br />
            <div align="center">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <a
                  className="btn "
                  href="/auth/google"
                  role="button"
                  aria-expanded="false"
                >
                  <b>
                    <i
                      className="fab fa-google fa-3x"
                      style={{ color: '#c82333' }}
                    />
                  </b>
                </a>
                <a
                  className="btn "
                  href="/auth/facebook"
                  role="button"
                  aria-expanded="false"
                >
                  <b>
                    <i
                      className="fab fa-facebook-square fa-3x"
                      style={{ color: '#0c5460' }}
                    />
                  </b>
                </a>
              </div>
            </div>
          </div>
          <div align="center" className="card-footer">
            <b>Have an account already</b>
            <br />
            <a
              className="btn btn-secondary btn-block"
              href="/login"
              role="button"
              aria-expanded="false"
            >
              <b>Login</b>
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
);
export default SignUpForm;
