import React, { Fragment } from 'react';

import TopNavBar from '../navigation/TopNavBar';
import Footer from '../navigation/Footer';

const NotFoundPage = props => (
	<Fragment>
		<TopNavBar />
		<div className="container">
			<img className="Notfound" src="/images/404.png" />
		</div>
		<Footer />
	</Fragment>
);
export default NotFoundPage;
