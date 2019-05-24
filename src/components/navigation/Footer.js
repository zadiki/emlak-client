import React from 'react';

const Footer = props => (
	<div
		className="pt-3"
		style={{
			marginTop: '3em',
			backgroundColor: '#0B2239'
		}}
	>
		<div className="container">
			<div className="row">
				<div className="col-12 col-lg-4 col-md-4">
					<ul className="list-group footer-card-display">
						<a
							className="list-group-item"
							href="/property-search?category=apartment&&propertytype=sale&renttype=&location="
						>
							Apartment for sale
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=house&&propertytype=sale&renttype=&location="
						>
							House for sale
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=office&&propertytype=sale&renttype=&location="
						>
							Office for sale
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=land&&propertytype=sale&renttype=&location="
						>
							Land for sale
						</a>
					</ul>
				</div>
				<div className="col-12 col-lg-4 col-md-4">
					<ul className="list-group footer-card-display">
						<a
							className="list-group-item"
							href="/property-search?category=apartment&&propertytype=rent&renttype=&location=nairobi"
						>
							Apartment for rent in Nairobi
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=apartment&&propertytype=rent&renttype=daily&location=nairobi"
						>
							Daily apartment in Nairobi
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=apartment&&propertytype=rent&renttype=&location=mombasa"
						>
							Apartment for rent in Mombasa
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=apartment&&propertytype=rent&renttype=&location=mombasa"
						>
							Daily apartment in Mombasa
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=apartment&&propertytype=rent&renttype=&location=kisumu"
						>
							Apartment for rent in Kisumu
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=house&&propertytype=rent&renttype=&location=nairobi"
						>
							House for rent in Nairobi
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=office&&propertytype=rent&renttype=&location=nairobi"
						>
							Office for rent in Nairobi
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=office&&propertytype=rent&renttype=&location=mombasa"
						>
							Office for rent in Mombasa
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=office&&propertytype=rent&renttype=&location=kisumu"
						>
							Office for rent in Kisumu
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=hotel&&propertytype=rent&renttype=daily&location=mombasa"
						>
							Hotels in Mombasa
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=cottage&&propertytype=&renttype=&location=mombasa&location=kwale&location=lamu&location=kilifi&location=malindi"
						>
							Daily Cottage in Coast region
						</a>
					</ul>
				</div>
				<div className="col-12 col-lg-4 col-md-4">
					<ul className="list-group footer-card-display">
						<a
							className="list-group-item"
							href="/property-search?category=apartment&&propertytype=sale&renttype=&location=nairobi"
						>
							Apartment for sale in Nairobi
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=apartment&&propertytype=sale&renttype=&location=mombasa"
						>
							Apartment for sale in Mombasa
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=house&&propertytype=sale&renttype=&location=nairobi"
						>
							House for sale in Nairobi
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=house&&propertytype=sale&renttype=&location=mombasa"
						>
							House for sale in Mombasa
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=office&&propertytype=salet&renttype=&location=nairobi"
						>
							Office for sale in Nairobi
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=office&&propertytype=sale&renttype=&location=mombasa"
						>
							Office for sale in Mombasa
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=land&&propertytype=sale&renttype=&location=nairobi"
						>
							Land for sale in Nairobi
						</a>
						<a
							className="list-group-item"
							href="/property-search?category=land&&propertytype=sale&renttype=&location=mombasa"
						>
							Land for sale in Mombasa
						</a>
					</ul>
				</div>
			</div>
			<div className="row mt-2 mb-1">
				<div className=" col-12 align-content-end">
					<a href="https://www.facebook.com">
						<img
							className="float-right rounded-circle ml-2 small-rounded-img"
							src="images/facebook.svg"
							alt="fb"
						/>
					</a>
					<a href="https://www.facebook.com">
						<img
							className="float-right rounded-circle ml-2 small-rounded-img"
							src="images/twitter.svg"
							alt="wazzup"
						/>
					</a>
					<a href="tel:+254705578809">
						<img
							className="float-right rounded-circle ml-2 small-rounded-img"
							src="images/whatsapp.png"
							alt="twiit"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
);
export default Footer;
