import React, { useState, useEffect } from 'react';
import CurrencyList from './CurrencyList';
import { currencies } from '../../utils/FormatValues';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const CurrencyToggler = ({ activeCurrency, setActiveCurrency }) => {
	const [listOpen, setListOpen] = useState(false);

	useEffect(() => {
		localStorage.setItem('activeCurrency', JSON.stringify(activeCurrency));
	}, [activeCurrency]);

	const toggleList = () => setListOpen(!listOpen);

	const handleSelect = (currency) => {
		setActiveCurrency(currency);
		toggleList();
	};

	return (
		<>
			<div
				tabIndex={0}
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
