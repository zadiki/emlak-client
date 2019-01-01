import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = ({ property, ...rest }) => (
 
    <div className="card rounded-0 property-card">
      <img
        className="card-img-top rounded-0"
        style={{ height: '10em' }}
        src={property.ImageUrl}
        alt="Card cap"
      />
      <div className="bottom-wrap m-0 bg-transparent">
        <span className="ml-1  text-primary">{property.SaleOrNot}</span>
        <div className="ml-1">
          <div
            style={{
              minHeight: '2.5em',
              marginTop: '0.3px',
              maxHeight: '2.5em'
            }}
          >
            <span className="h9 text-primary " style={{ fontSize: '13px' }}>
              {property.Address}
            </span>
          </div>
          <span
            className="mt-1"
            style={{
              fontsize: '12px',
              display: 'block',
              position: 'relative'
            }}
          >
            Ksh:{property.Price}
          </span>
          <span className="mt-1  mb-1">
            <i className="fas fa-star fa-xs rating-style rating-style-full" />
            <i className="fas fa-star rating-style rating-style-half" />
            <i className="fas fa-star rating-style rating-style-half" />
            <i className="fas fa-star-half-alt rating-style rating-style-half" />
            <i className="far fa-star  rating-style rating-style-empty" />
          </span>
        </div>
      </div>
    </div>
);
PropertyCard.propTypes = {
  property: PropTypes.shape({
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
  }).isRequired
};
export default PropertyCard;
