import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { logout } from '../../actions/user';

class TopNavBar extends Component {
  constructor(props) {
    super(props);
    this.logoutLinkClicked = this.logoutLinkClicked.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    const {isOpen} =this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  logoutLinkClicked(e) {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }

  render() {
    const { isAuthenticated, user } = this.props;
    const {isOpen }=this.state;
    const IsAuthenticatedNavBar = () => {
      if (isAuthenticated) {
        return (
          <Fragment>
            <NavItem>
              <NavLink href="/">
                <i className="fas fa-envelope" />
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret href="/">
                {user && (
                  <img
                    className="card-img-top mr-1 rounded-circle small-rounded-img"
                    src={user.image}
                    alt="img"
                  />
                )}
                {user && user.profilename}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/">Post an ad for free</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/">My account</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/" onClick={this.logoutLinkClicked}>Logout</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Fragment>
        );
      }
      return (
        <Fragment>
          <NavItem className="active">
            <NavLink className="float-left" href="/">SignUp</NavLink>
            <NavLink className="float-right" href="/login">Login</NavLink>
          </NavItem>
        </Fragment>
      );
    };
    return (
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <img
              src="images/company/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block"
              alt="logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <IsAuthenticatedNavBar />
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

TopNavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
  isAuthenticated:PropTypes.bool.isRequired
};

const mapStatetoProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user.user
});

export default connect(
  mapStatetoProps,
  { logout }
)(TopNavBar);
