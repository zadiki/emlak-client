/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPropertyDetail } from '../../actions/property';

class Property extends Component {
  componentDidMount() {
    const { fetchPropertyDetail, match } = this.props;
    const id = match.params.id;
    fetchPropertyDetail(id);
  }

  render() {
    const { property } = this.props;
    return (
      <div>
        <p>{JSON.stringify(property)}</p>
      </div>
    );
  }
}
const mapStatetoProps = state => ({
  property: state.property.property
});

Property.propTypes = {
  fetchPropertyDetail: PropTypes.func.isRequired,
  property: PropTypes.shape().isRequired
};

export default connect(
  mapStatetoProps,
  { fetchPropertyDetail }
)(Property);
