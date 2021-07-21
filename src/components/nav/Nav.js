import React from 'react';
import CurrencyToggler from './CurrencyToggler';
import DarkToggler from './DarkToggler';

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
				<DarkToggler />
			</div>
		</nav>
	);
};

export default Nav;
