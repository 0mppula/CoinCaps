import React from 'react';

const CryptoItem = ({ crypto }) => {
	const formatPercent = (number) => `${new Number(number).toFixed(2)}%`;
	const formatUSD = (price) =>
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'usd',
		}).format(price);
	const formatMarketCapUSD = (price) =>
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'usd',
		})
			.format(price)
			.replace(/(\.|,)\d+$/g, '');

	const getPriceChangeClass = (change) => {
		if (change > 0) {
			return 'green';
		} else if (change < 0) {
			return 'red';
		} else {
			return 'no-change';
		}
	};

	return (
		<tr>
			<td>{crypto.market_cap_rank}</td>
			<td>{crypto.name}</td>
			<td>{crypto.symbol.toUpperCase()}</td>
			<td>{formatMarketCapUSD(crypto.market_cap)}</td>
			<td>{formatUSD(crypto.current_price)}</td>
			<td className={getPriceChangeClass(crypto.price_change_percentage_24h_in_currency)}>
				{formatPercent(crypto.price_change_percentage_24h_in_currency)}
			</td>
			<td className={getPriceChangeClass(crypto.price_change_percentage_7d_in_currency)}>
				{formatPercent(crypto.price_change_percentage_7d_in_currency)}
			</td>
		</tr>
	);
};

export default CryptoItem;
