import React from 'react';
import euroSymbol from '../../images/currencies/euro.svg';
import usdSymbol from '../../images/currencies/usd.svg';
import yenSymbol from '../../images/currencies/yen.svg';
import btcSymbol from '../../images/currencies/btc.png';
import ethSymbol from '../../images/currencies/ethereum.png';

const CurrencyList = ({ listOpen, setListOpen, setActiveCurrency }) => {
	const currencies = [
		{ name: 'usd', symbol: '$', locale: 'en-US', img: euroSymbol },
		{ name: 'eur', symbol: '€', locale: 'fi-FI', img: usdSymbol },
		{ name: 'jpy', symbol: '¥', locale: 'ja-JP', img: yenSymbol },
	];

	const handleClick = (currency) => {
		setActiveCurrency({ currency: currency.name, locale: currency.locale });
		setListOpen(!listOpen);
	};

	return (
		<div className={`currency-list ${listOpen ? '' : 'show'}`}>
			<ul>
				{currencies.map((currency, i) => (
					<li key={i} className="currency-item" onClick={() => handleClick(currency)}>
						<img src={currency.img} alt={currency.symbol} />
						{currency.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CurrencyList;
