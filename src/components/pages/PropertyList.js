import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropertyCard from '../property/PropertyCard';

const PropertyList = props => {
  const { properties } = props;
  const propertyCardList = properties.map(property => (
    <Link to={`/property/${property.id}`} key={property.id}>
      <PropertyCard  property={property} />
    </Link>
  ));
  return (
    <div className="container-fluid">
      <div className="row ">{propertyCardList}</div>
    </div>
  );
};
PropertyList.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      Category: PropTypes.string.isRequired,
      SaleOrNot: PropTypes.string.isRequired,
      Price: PropTypes.string.isRequired,
      Address: PropTypes.string.isRequired,
      ImageUrl: PropTypes.string.isRequired,
      Workspace: PropTypes.string,
      Bathroom: PropTypes.string,
      Bedroom: PropTypes.string,
      IsMasterAndSuite: PropTypes.bool,
      Furnished: PropTypes.string,
      Parking: PropTypes.string,
      Bedsize: PropTypes.string,
      NoOfBeds: PropTypes.string,
      HotShower: PropTypes.string,
      SwimmingPool: PropTypes.string,
      BreakfastProvided: PropTypes.string
    })
  ).isRequired
};

const mapStatetoProps = state => ({
  properties: state.property.propertylist
});
export default connect(mapStatetoProps)(PropertyList);
