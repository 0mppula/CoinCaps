import React, { useState } from 'react';
import CurrencyToggler from './CurrencyToggler';
import DarkToggler from './DarkToggler';
import Burger from './Burger';

import logo_light from '../../images/branding/logo_light.png';
import logo_dark from '../../images/branding/logo_dark.png';

const Nav = ({ activeCurrency, setActiveCurrency, darkMode, setDarkMode }) => {
	const [burgerActive, setBurgerActive] = useState(false);

	const handleBurgerClick = () => {
		setBurgerActive(!burgerActive);
	};

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
			<div className={burgerActive ? 'nav-links active' : 'nav-links'}>
				<div className="controls">
					<CurrencyToggler
						activeCurrency={activeCurrency}
						setActiveCurrency={setActiveCurrency}
						burgerActive={burgerActive}
					/>
					<DarkToggler
						darkMode={darkMode}
						setDarkMode={setDarkMode}
						burgerActive={burgerActive}
					/>
				</div>
			</div>
			<Burger burgerActive={burgerActive} setBurgerActive={handleBurgerClick} />
		</nav>
	);
};

export default Nav;
