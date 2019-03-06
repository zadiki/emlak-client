/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

const UserDetail = (props) => {
  const { user={} } = props;
  console.log(user);
  return (
    <div className="col-md-12 mb-1 mt-1">
      <div className="card rounded-0 bg-light p-1">
        <div className="row justify-content-center">
          <div className="col-md-6 mt-2">
            <a href={`/userproperties/${user._id}`}>
              <img
                className="card-img-top rounded-circle img-fluid  mb-2"
                src={user.Avatar}
                alt="Card  cap"
                style={{ maxHeight: '10em' }}
              />
            </a>
          </div>
        </div>
        <div className="row justify-content-center">
          <span className="col-8 mb-2 align-content-center">{user.ProfileName}</span>
        </div>
        <div className="row justify-content-center">
          <div className="list-group border-0 mb-1 rounded-0 col-8">
            <button
              type="button"
              className="list-group-item rounded-0 bg-light show-phone "
            >
              {`Contact ${user.Phone}`}
            </button>
          </div>
          <div className="list-group border-0 mb-1 rounded-0 col-8">
            <button
              type="button"
              className="list-group-item rounded-0 bg-light hide-phone d-none "
            >
              Hide Contact
            </button>
          </div>
          <div className="list-group border-0 mb-1 rounded-0 col-8">
            <a
              type="button"
              href="tel: 07055"
              className="list-group-item rounded-0 bg-light d-none phone "
            >
              Call 07055
            </a>
          </div>
          <div className="list-group border-0 mb-1 rounded-0 col-8">
            <a
              href="sms://0780014047?body=I%27m%20interested%20in%20your%20product.%20Please%20contact%20me."
              type="button"
              className="list-group-item rounded-0 bg-light"
            >
              Send a message
            </a>
          </div>
        </div>
        <div className="bottom-wrap m-0 bg-transparent">
          <div className="clearfix">
            <span className="float-right">
              <i className="fas fa-star fa-xs rating-style rating-style-full" />
              <i className="fas fa-star rating-style rating-style-half" />
              <i className="fas fa-star rating-style rating-style-half" />
              <i className="fas fa-star-half-alt rating-style rating-style-half" />
              <i className="far fa-star  rating-style rating-style-empty" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
UserDetail.propTypes = {
  user: PropTypes.shape().isRequired
};
export default UserDetail;
