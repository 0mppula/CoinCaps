import React, { useState } from 'react';
import CurrencyList from './CurrencyList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSortDown } from '@fortawesome/free-solid-svg-icons';
import usdSymbol from '../../images/currencies/usd.svg';
import logo from '../../images/logo/logo.png';

const Nav = ({ activeCurrency, setActiveCurrency }) => {
	const [listOpen, setListOpen] = useState(false);

	const toggleList = () => setListOpen(!listOpen);

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
				<div className="currency-toggler" onClick={toggleList}>
					{/* FIX MEE */}
					<img src={usdSymbol} alt="$" />
					<p className="currency-text">{activeCurrency.currency}</p>
					<FontAwesomeIcon className="icon sort" icon={faSortDown} />
				</div>
				<div className="icon-wrapper">
					<FontAwesomeIcon className="icon moon m-6" icon={faMoon} />
				</div>
				<CurrencyList
					listOpen={listOpen}
					setListOpen={setListOpen}
					setActiveCurrency={setActiveCurrency}
				/>
			</div>
		</nav>
	);
};

export default Nav;
