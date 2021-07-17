import React, { useState, useEffect } from 'react';

const TableInfo = ({ crypto, active }) => {
	const [prices, setPrices] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (crypto.id === active) {
			getCryptoData();
		}
	}, [active]);

	const getCryptoData = async () => {
		setLoading(true);
		const url = `https://api.coingecko.com/api/v3/coins/${active}/market_chart?vs_currency=usd&days=30&interval=daily`;
		const response = await fetch(url);
		const { prices: priceData } = await response.json();
		const monthly = priceData.map((price) => price[1]);
		setPrices(monthly);
		setLoading(false);
	};

	const visibleInfo = (
		<tr className="table-info show">
			<td colSpan={2}>Volume:</td>
			<td colSpan={2}>{`${parseInt(crypto.circulating_supply).toLocaleString()}`}</td>
			<td>TEST:</td>
			<td>500,100,500</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	);
	const hiddenInfo = (
		<tr className="table-info">
			<td colSpan={2}>{'\u00A0'}</td>
			<td colSpan={2}>{'\u00A0'}</td>
			<td>{'\u00A0'}</td>
			<td>{'\u00A0'}</td>
			<td>{'\u00A0'}</td>
			<td>{'\u00A0'}</td>
			<td>{'\u00A0'}</td>
		</tr>
	);

	return <>{crypto.id === active ? visibleInfo : hiddenInfo}</>;
};

export default TableInfo;
