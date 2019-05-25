/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { fetchPropertyDetail } from '../../actions/property';
import TopNavBar from '../navigation/TopNavBar';
import Footer from '../navigation/Footer';
import SearchForm from '../forms/SearchForm';
import ImageSlider from '../property/ImageSlider';
import Map from '../maps/Map';
import StreetView from '../maps/StreetView';
import PropertyDetail from '../property/PropertyDetail';
import UserDetail from '../user/UserDetail';

const items = [
	{
		src: '/images/company/logo.jpg',
		altText: 'Slide 1',
		caption: 'Slide 1'
	},
	{
		src: '/images/company/logo.jpg',
		altText: 'Slide 2',
		caption: 'Slide 2'
	},
	{
		src: '/images/company/logo.jpg',
		altText: 'Slide 3',
		caption: 'Slide 3'
	}
];

class Property extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabdisplay: 'images'
		};
		this.onTabclicked = this.onTabclicked.bind(this);
	}

	componentWillMount() {
		const { fetchPropertyDetail, match } = this.props;
		const id = match.params.id;
		fetchPropertyDetail(id);
	}

	onTabclicked(val) {
		this.setState({
			tabdisplay: val
		});
	}

	render() {
		const { property } = this.props;

		if (Object.keys(property).length < 1) {
			return null;
		}
		const { tabdisplay } = this.state;
		const TabDisplays = () => {
			if (tabdisplay === 'images') {
				return <ImageSlider items={items} />;
			}
			if (tabdisplay === 'map') {
				return (
					<div>
						<Map />
					</div>
				);
			}
			if (tabdisplay === 'street') {
				return (
					<div>
						<StreetView />
					</div>
				);
			}
		};
		return (
			<Fragment>
				<TopNavBar />
				<main
					className="container"
					style={{ top: '1.5em', position: 'relative' }}
				>
					<SearchForm />
					<div className="row" style={{ marginTop: '0.1em' }}>
						<div className="col-12">
							<Nav tabs>
								<NavItem>
									<NavLink
										onClick={() => this.onTabclicked('images')}
										href="#"
										className={tabdisplay === 'images' ? 'active' : ''}
									>
										Images
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										onClick={() => this.onTabclicked('map')}
										href="#"
										className={tabdisplay === 'map' ? 'active' : ''}
									>
										Location
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										onClick={() => this.onTabclicked('street')}
										href="#"
										className={tabdisplay === 'street' ? 'active' : ''}
									>
										Street View
									</NavLink>
								</NavItem>
							</Nav>
						</div>
					</div>
					<div className="row h-100 mb-2 mt-2" style={{ marginTop: '0.1em' }}>
						<div className="col-5">
							<TabDisplays />
						</div>
						<div className="col-4 col-md-3 mb-1 d-none d-md-block">
							<PropertyDetail property={property} />
						</div>
						<div className="col-3 ">
							<UserDetail user={property.PostedBy} />
						</div>
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
