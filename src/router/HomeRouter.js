import React from 'react';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const HomeRouter = ({
  isAuthenticated,
  isLoading,
  component: Component,
  ...rest
}) => <Route {...rest} render={props => <Component {...props} />} />;
function mapStatetoProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated,
    isLoading: state.user.isLoading
  };
}

HomeRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};
export default connect(mapStatetoProps)(HomeRouter);
