import React, { useState, useEffect } from 'react';

import Chart from './Chart';
import Loader from '../loaders/LoaderSmall';

import { formatPrice } from '../../utils/FormatValues';
import { formatDate } from '../../utils/FormatValues';

const TableInfo = ({ crypto, active, activeCurrency, darkMode }) => {
	const [xPrices, setXPrices] = useState([]);
	const [yPrices, setYPrices] = useState([]);
	const [loading, setLoading] = useState(true);

	const isActive = () => {
		let value = crypto.id === active;
		return value;
	};

	useEffect(() => {
		isActive() && getCryptoData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active]);

	const getCryptoData = async () => {
		setLoading(true);
		const url = `https://api.coingecko.com/api/v3/coins/${active}/market_chart?vs_currency=${activeCurrency.code}&days=30&interval=daily`;
		const response = await fetch(url);
		const { prices: priceData } = await response.json();
		const yMonthly = priceData.map((price) => price[1]);
		const xMonthly = yMonthly.map((date, i) => i);
		setXPrices(xMonthly);
		setYPrices(yMonthly);
		setLoading(false);
	};

	const visibleInfo = (
		<tr className="table-info show">
			<td colSpan={2}>
				<p className="info-header">Circulating</p>
				<p className="info-value">{`${parseInt(
					crypto.circulating_supply
				).toLocaleString()}`}</p>
			</td>

			<td colSpan={1}>
				<p className="info-header">High 24h</p>
				<p className="info-value">
					{formatPrice(crypto.high_24h, activeCurrency.locale, activeCurrency.code)}
				</p>
			</td>
			<td colSpan={1}>
				<p className="info-header">Low 24h</p>
				<p className="info-value">
					{formatPrice(crypto.low_24h, activeCurrency.locale, activeCurrency.code)}
				</p>
			</td>
			<td colSpan={1}>
				<p className="info-header">All Time High</p>
				<p className="info-value">
					{formatPrice(crypto.ath, activeCurrency.locale, activeCurrency.code)}
				</p>
			</td>

			<td colSpan={1}>
				<p className="info-header">ATH Date</p>
				<p className="info-value">{formatDate(crypto.ath_date)}</p>
			</td>

			<td colSpan={2} className="chart-colspan">
				{loading ? (
					<Loader darkMode={darkMode} />
				) : (
					<div className="chart-info-wrapper">
						<p className="info-header">Price 30d</p>
						<div className="chart-wrapper">
							{xPrices.length > 3 ? (
								<Chart xPrices={xPrices} yPrices={yPrices} darkMode={darkMode} />
							) : (
								<p className="info-value">No data... 📈</p>
							)}
						</div>
					</div>
				)}
			</td>
			<td></td>
		</tr>
	);
	const hiddenInfo = (
		<tr className="table-info">
			<td colSpan={8}>
				<div className="info-container">
					<div>
						<p>{'\u00A0'}</p>
						<p>{'\u00A0'}</p>
					</div>
					<div>
						<p>{'\u00A0'}</p>
						<p>{'\u00A0'}</p>
					</div>
					<div>
						<p>{'\u00A0'}</p>
						<p>{'\u00A0'}</p>
					</div>
					<div>
						<p>{'\u00A0'}</p>
						<p>{'\u00A0'}</p>
					</div>
					<div>
						<p>{'\u00A0'}</p>
					</div>
				</div>
			</td>
		</tr>
	);

	return <>{isActive() ? visibleInfo : hiddenInfo}</>;
};

export default TableInfo;
