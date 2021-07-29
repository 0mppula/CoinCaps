import React, { useState, useEffect } from 'react';
import CurrencyList from './CurrencyList';
import { currencies } from '../../utils/Currencies';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const CurrencyToggler = ({ activeCurrency, setActiveCurrency, burgerActive }) => {
	const [listOpen, setListOpen] = useState(false);

	useEffect(() => {
		localStorage.setItem('activeCurrency', JSON.stringify(activeCurrency));
	}, [activeCurrency]);

	const toggleList = () => setListOpen(!listOpen);

	const handleSelect = (currency) => {
		setActiveCurrency(currency);
		toggleList();
	};

	let w = window.innerWidth;

	return (
		<>
			<div
				tabIndex={w > 768 || burgerActive ? 0 : null}
				className="currency-toggler"
				onKeyPress={toggleList}
				onClick={toggleList}
			>
				<img src={activeCurrency.img} alt={activeCurrency.symbol} />
				<p className="currency-text">{activeCurrency.code}</p>
				<FontAwesomeIcon className="icon sort" icon={faSortDown} />
			</div>
			<CurrencyList
				listOpen={listOpen}
				handleSelect={handleSelect}
				toggleList={toggleList}
				setListOpen={setListOpen}
				activeCurrency={activeCurrency}
				currencies={currencies}
			/>
		</>
	);
};

export default CurrencyToggler;
