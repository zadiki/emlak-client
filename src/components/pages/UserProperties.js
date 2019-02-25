import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopNavBar from '../navigation/TopNavBar';
import Footer from '../navigation/Footer';
import { fetchUserProperties } from '../../actions/property';

class UserProperties extends Component {
  componentDidMount() {
    const { userid } = this.props.match.params;
    const { fetchUserProperties } = this.props;
    fetchUserProperties(userid);
  }

  render() {
    const { userid } = this.props.match.params;

    return (
      <Fragment>
        <TopNavBar />
        {JSON.stringify(userid)}
        <Footer />
      </Fragment>
    );
  }
}

UserProperties.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userid: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  fetchUserProperties:PropTypes.func.isRequired
};

export default connect(
  null,
  { fetchUserProperties }
)(UserProperties);
