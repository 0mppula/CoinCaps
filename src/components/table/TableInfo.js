import React, { useState, useEffect } from 'react';
import HiddenInfo from './HiddenInfo';
import VisibleInfo from './VisibleInfo';
let dateFormat = require('dateformat');

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

	const formatUSD = (price) =>
		new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'usd',
		}).format(price);

	return (
		<>
			{crypto.id === active ? (
				<VisibleInfo
					supply={parseInt(crypto.circulating_supply).toLocaleString()}
					volume={parseInt(crypto.total_volume).toLocaleString()}
					ath={formatUSD(crypto.ath)}
					atdh={dateFormat(new Date(crypto.ath_date), 'dd/mm/yyyy')}
				/>
			) : (
				<HiddenInfo />
			)}
		</>
	);
};

export default TableInfo;
