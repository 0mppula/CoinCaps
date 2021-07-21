import React, { useState } from 'react';
import CurrencyList from './CurrencyList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

/* Currency image files */
import euroSymbol from '../../images/currencies/euro.svg';
import usdSymbol from '../../images/currencies/usd.svg';
import yenSymbol from '../../images/currencies/yen.svg';
import btcSymbol from '../../images/currencies/btc.png';
import ethSymbol from '../../images/currencies/ethereum.png';

/* Data for supported currencies */
const currencies = [
	{ name: 'euro', code: 'eur', symbol: '€', locale: 'fi-FI', img: euroSymbol },
	{ name: 'dollar', code: 'usd', symbol: '$', locale: 'en-US', img: usdSymbol },
	{ name: 'yen', code: 'jpy', symbol: '¥', locale: 'ja-JP', img: yenSymbol },
	{ name: 'bitcoin', code: 'btc', symbol: '₿', locale: 'en-US', img: btcSymbol },
	{ name: 'etherium', code: 'eth', symbol: 'Ξ', locale: 'en-US', img: ethSymbol },
];

const CurrencyToggler = ({ activeCurrency, setActiveCurrency }) => {
	const [listOpen, setListOpen] = useState(false);
	const [activeImg, setActiveImg] = useState({ img: usdSymbol, symbol: '$' });

	const toggleList = () => setListOpen(!listOpen);

	const handleSelect = (currency) => {
		setActiveCurrency({ code: currency.code, name: currency.name, locale: currency.locale });
		setActiveImg({ img: currency.img, symbol: currency.symbol });
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
				<img src={activeImg.img} alt={activeImg.symbol} />
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