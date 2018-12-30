import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LoginRouter from './LoginRouter';
import HomeRouter from './HomeRouter';
import PropertyRouter from './PropertyRouter';
import LoginPage from '../components/pages/LoginPage';
import Home from '../components/pages/Home';
import Property from '../components/pages/Property';

const Router = ({ location }) => (
  <div>
    <LoginRouter
      exact
      location={location}
      path="/login"
      component={LoginPage}
    />
    <HomeRouter exact location={location} path="/" component={Home} />
    <PropertyRouter
      exact
      location={location}
      path="/property/:id"
      component={Property}
    />
  </div>
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
