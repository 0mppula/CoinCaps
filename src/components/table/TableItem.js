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
			return 'success';
		} else if (change < 0) {
			return 'danger';
		} else {
			return 'no-change';
		}
	};

	return (
		<tr className="table-item">
			<td>{crypto.market_cap_rank}</td>
			<td>
				<img src={crypto.image} alt={`${crypto.name} icon`} />
			</td>
			<td>{crypto.symbol.toUpperCase()}</td>
			<td>{crypto.name}</td>
			<td>{formatMarketCapUSD(crypto.market_cap)}</td>
			<td>{formatUSD(crypto.current_price)}</td>
			<td className={getPriceChangeClass(crypto.price_change_percentage_24h_in_currency)}>
				{formatPercent(crypto.price_change_percentage_24h_in_currency)}
			</td>
			<td className={getPriceChangeClass(crypto.price_change_percentage_7d_in_currency)}>
				{formatPercent(crypto.price_change_percentage_7d_in_currency)}
			</td>
			<div className="border-bottom"></div>
		</tr>
	);
};

export default CryptoItem;
