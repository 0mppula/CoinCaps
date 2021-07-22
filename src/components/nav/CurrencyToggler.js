import React, { useState, useEffect } from 'react';
import CurrencyList from './CurrencyList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

/* Currency image files */
import usdSymbol from '../../images/currencies/usd.svg';
import eurSymbol from '../../images/currencies/euro.svg';
import gbpSymbol from '../../images/currencies/pound.svg';
import yenSymbol from '../../images/currencies/yen.svg';
import btcSymbol from '../../images/currencies/btc.png';
import ethSymbol from '../../images/currencies/ethereum.png';

/* Data for supported currencies */
const currencies = [
	{ name: 'dollar', code: 'usd', symbol: '$', locale: 'en-US', img: usdSymbol },
	{ name: 'euro', code: 'eur', symbol: '€', locale: 'fi-FI', img: eurSymbol },
	{ name: 'pound ', code: 'gbp', symbol: '£', locale: 'en-US', img: gbpSymbol },
	{ name: 'yen', code: 'jpy', symbol: '¥', locale: 'en-US', img: yenSymbol },
	{ name: 'bitcoin', code: 'btc', symbol: '₿', locale: 'en-US', img: btcSymbol },
	{ name: 'etherium', code: 'eth', symbol: 'Ξ', locale: 'en-US', img: ethSymbol },
];

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
