import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onChange, onSubmit, ...rest }) => (
  <div className="row justify-content-center">
    <div className="col-10 col-md-10 col-lg-7 col-xl-5  col-sm-10 input-group mb-3">
      <form onSubmit={onSubmit} className="col-12">
        <div className="input-group">
          <input
            type="text"
            name="searchText"
            onChange={onChange}
            className="form-control"
            placeholder="Search property"
            aria-label=""
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default SearchForm;
