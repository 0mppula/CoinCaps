import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faDollarSign, faSortDown } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = () => {
	return (
		<nav className="navbar">
			<div className="info">
				<a href="">
					<img
						src="https://www.brahenvoimistelijat.fi/wp_public/wp-content/uploads/2018/01/logo.png"
						alt="logo.jpg"
						width="40px"
					/>
					<h1>site name</h1>
				</a>
			</div>
			<div className="controls">
				<div className="icon-wrapper">
					<FontAwesomeIcon className="icon moon m-6" icon={faMoon} />
				</div>
				<div className="currency-toggler">
					<FontAwesomeIcon className="icon usd" icon={faDollarSign} />
					<p className="currency">USD</p>
					<FontAwesomeIcon className="icon sort" icon={faSortDown} />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
