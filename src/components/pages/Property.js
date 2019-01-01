/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPropertyDetail } from '../../actions/property';
import TopNavBar from '../navigation/TopNavBar';
import Footer from '../navigation/Footer';

class Property extends Component {
  componentDidMount() {
    const { fetchPropertyDetail, match } = this.props;
    const id = match.params.id;
    fetchPropertyDetail(id);
  }

  render() {
    const { property } = this.props;
    return (
      <Fragment>
        <TopNavBar />
        <main
          className="container-fluid"
          style={{ top: '3em', position: 'relative' }}
        >
          <div className="row h-100" style={{ marginTop: '0.1em' }}>
            <div>{JSON.stringify(property)}</div>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}
const mapStatetoProps = state => ({
  property: state.property.property
});

Property.propTypes = {
  fetchPropertyDetail: PropTypes.func.isRequired,
  property: PropTypes.shape().isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(
  mapStatetoProps,
  { fetchPropertyDetail }
)(Property);
