import React from 'react';
import PropTypes from 'prop-types';

const PropertyDetail = props => {
  const { property } = props;
  console.log(property);
  
  return (
    <div className="">
      <div className="clearfix rounded-0 ">
        <div className="list-group rounded-0">
          <button
            type="button"
            className="list-group-item rounded-0 bg-success justify-content-center"
          >
            KSH:{' '}
            {`${
              property.Price + property.SaleOrNot === 'rent'
                ? `  per ${property.PaymentMode}`
                : ''
            }`}
          </button>
          <button
            type="button"
            className="list-group-item rounded-0 justify-content-center"
          >
            Nairobi
          </button>
          <button
            type="button"
            className="list-group-item rounded-0 list-group-item-action d-flex flex-row"
          >
            <span className="float-left p-2 flex-fill bg-success rounded-0">
              36
            </span>
            <span className="float-right p-2 flex-fill bg-info rounded-0">
              89m2
            </span>
          </button>
          <button
            type="button"
            className="list-group-item rounded-0 list-group-item-action"
            disabled
          >
            Vestibulum at eros
          </button>
          <div className="card rounded-0">
            <div className="card-body">
              <h5 className="card-title">Description big</h5>
              <p className="card-text">{property.Description}</p>
              <div
                className="fb-share-button"
                data-layout="button_count"
                data-size="small"
                data-mobile-iframe="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
PropertyDetail.propTypes = {
  property: PropTypes.shape().isRequired
};
export default PropertyDetail;
