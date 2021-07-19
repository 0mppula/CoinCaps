import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faDollarSign, faSortDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Nav.css';

const Nav = () => {
	return (
		<nav className="navbar">
			<div className="nav-info">
				<a href=".">
					<img src={logo} alt="logo.jpg" />
					<h1>
						<span>C</span>oin <span>C</span>aps
					</h1>
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
