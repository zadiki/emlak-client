import React from 'react';
import PropTypes from 'prop-types';


const TopNavBar = ({logout}) => (
    <div className="bg-light" style={{marginBottom: '1.5em'}}>

    <nav className="navbar bg-light  navbar-expand-lg navbar-light fixed-top ">
        <div className="container">
            <a className="navbar-brand" href="/">
                
                <img src="https://images.prop24.com/199025065/Crop481x298" alt="waoa" className="d-inline-block card-img-top rounded-circle small-rounded-img"/>
                
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />

            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active d-none d-md-block">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a className="nav-link" href="/">Link</a>
                    </li>
                                           
           
                    <li className="nav-item active d-none d-block d-sm-none">
                        <a className="nav-link" href="/" onClick={logout}>logout <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active d-none d-block d-sm-none">
                        <a className="nav-link" href="/signup">Sign Up <span className="sr-only">(current)</span></a>
                    </li>
              

                </ul>
                <div className="nav-item d-none d-md-block">
                  
                    <a href="/messages"><i className="fas fa-envelope"/></a>
                 
                </div>
             
                <div className="nav-item d-none d-md-block">
                    <a className="nav-link" href="/" onClick={logout}>logout <span className="sr-only">(current)</span></a>
                </div>

            </div>
        </div>
    

    </nav>

</div>

);

TopNavBar.propTypes = {
    logout:PropTypes.func.isRequired
};

export default TopNavBar;
