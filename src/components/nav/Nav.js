import React from 'react';
import CurrencyToggler from './CurrencyToggler';
import DarkToggler from './DarkToggler';

import logo_light from '../../images/logo/logo_light.png';
import logo_dark from '../../images/logo/logo_dark.png';

const Nav = ({ activeCurrency, setActiveCurrency, darkMode, setDarkMode }) => {
	return (
		<nav className="navbar">
			<div className="nav-info">
				<a href=".">
					<img src={darkMode === true ? logo_dark : logo_light} alt="logo.jpg" />
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
				<DarkToggler darkMode={darkMode} setDarkMode={setDarkMode} />
			</div>
		</nav>
	);
};

export default Nav;
