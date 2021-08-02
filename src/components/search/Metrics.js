import React, { useState, useEffect } from 'react';
import LoaderMini from '../loaders/LoaderMini';

import { formatPrice } from '../../utils/FormatValues';

const Metrics = ({ activeCurrency, darkMode }) => {
	const [globalData, setGlobalData] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			const url = 'https://api.coingecko.com/api/v3/global';
			const result = await fetch(url);
			const {
				data: { active_cryptocurrencies, total_market_cap },
			} = await result.json();
			let { [activeCurrency.code]: marketCap } = total_market_cap;
			setGlobalData({ active_cryptocurrencies, marketCap });
			setLoading(false);
		};

		getData();
	}, [activeCurrency]);

	return (
		<div className="metrics">
			{loading && (
				<>
					<LoaderMini darkMode={darkMode} />
					<LoaderMini darkMode={darkMode} />
				</>
			)}
			{!loading && (
				<>
					<div className="metrics-section">
						<span className="metrics-title">Total Cryptos:</span>
						<span className="metrics-value">
							{globalData.active_cryptocurrencies.toLocaleString() || 'No data...'}
						</span>
					</div>
					<div className="metrics-section">
						<span className="metrics-title">Total Marketcap:</span>
						<span className="metrics-value">
							{formatPrice(
								globalData.marketCap,
								activeCurrency.locale,
								activeCurrency.code
							)}
						</span>
					</div>
				</>
			)}
		</div>
	);
};

export default Metrics;
