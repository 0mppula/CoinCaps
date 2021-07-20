import React from 'react';
import CurrencyToggler from './CurrencyToggler';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo/logo.png';

const Nav = ({ activeCurrency, setActiveCurrency }) => {
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
				<CurrencyToggler
					activeCurrency={activeCurrency}
					setActiveCurrency={setActiveCurrency}
				/>
				<div tabIndex={0} className="icon-wrapper">
					<FontAwesomeIcon className="icon moon m-6" icon={faMoon} />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
