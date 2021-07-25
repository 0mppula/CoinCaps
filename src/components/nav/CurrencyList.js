import React, { useEffect, useRef } from 'react';

const CurrencyList = ({ listOpen, handleSelect, setListOpen, activeCurrency, currencies }) => {
	useEffect(() => {
		let handler = (e) => {
			if (!listRef.current.contains(e.target) && listOpen) {
				setListOpen(false);
			}
		};

		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	});

	const listRef = useRef();

	return (
		<div ref={listRef} className={`currency-list ${listOpen ? 'show' : ''}`}>
			<ul>
				{currencies
					.filter((currency) => currency.code !== activeCurrency.code)
					.map((currency, i) => (
						<li
							tabIndex={listOpen ? 0 : -1}
							key={i}
							className="currency-item"
							onClick={() => handleSelect(currency)}
							onKeyPress={() => handleSelect(currency)}
						>
							<img src={currency.img} alt={currency.symbol} />
							{currency.name}
						</li>
					))}
			</ul>
		</div>
	);
};

export default CurrencyList;
