/* eslint-disable no-shadow */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopNavBar from '../navigation/TopNavBar';
import { logout } from '../../actions/user';
import { fetchProperties } from '../../actions/property';
import PropertyList from './PropertyList';
import SearchForm from '../forms/SearchForm';
import Footer from '../navigation/Footer';
import SideNavBar from '../navigation/SideNavBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchProperties } = this.props;
    fetchProperties();
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Fragment>
        <TopNavBar />
        <main
          className="container"
          style={{ top: '1.5em', position: 'relative' }}
        >
          <SearchForm onChange={this.onChange} onSubmit={this.onSubmit} />
          <div className="row h-100" style={{ marginTop: '0.1em' }}>
            <div className="col-0  col-sm-2 col-md-3 col-lg-3 col-xl-2">
              <SideNavBar />
            </div>
            <div className="col-12 col-sm-10 col-md-9 col-lg-9 col-xl-10">
              <div className="container">
                <div className="row">
                  <PropertyList />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

Home.propTypes = {
  fetchProperties: PropTypes.func.isRequired
};

export default connect(null,{ logout, fetchProperties })(Home);
