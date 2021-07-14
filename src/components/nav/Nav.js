import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faDollarSign, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = () => {
	return (
		<nav className="navbar">
			<div className="info">
				<img
					src="https://www.brahenvoimistelijat.fi/wp_public/wp-content/uploads/2018/01/logo.png"
					alt="logo.jpg"
					width="40px"
				/>
				<h1>site name</h1>
			</div>
			<div className="controls">
				<FontAwesomeIcon icon={faMoon} />
				<div className="currency-toggler">
					<FontAwesomeIcon icon={faDollarSign} />
					<p className="currency">USD</p>
					<FontAwesomeIcon icon={faSortDown} />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
