import React, { useState, useEffect } from 'react';
import Chart from './Chart';
let dateFormat = require('dateformat');

const TableInfo = ({ crypto, active }) => {
	const [xPrices, setXPrices] = useState([]);
	const [yPrices, setYPrices] = useState([]);
	const [loading, setLoading] = useState(true);

	const isActive = () => {
		let value = crypto.id === active;
		return value;
	};

	useEffect(() => {
		isActive() && getCryptoData();
	}, [active]);

	const getCryptoData = async () => {
		setLoading(true);
		const url = `https://api.coingecko.com/api/v3/coins/${active}/market_chart?vs_currency=usd&days=30&interval=daily`;
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
				<p className="info-header">Volume</p>
				<p className="info-value">{`${parseInt(crypto.total_volume).toLocaleString()}`}</p>
			</td>

			<td colSpan={1}>
				<p className="info-header">All Time High</p>
				<p className="info-value">{`$${parseInt(crypto.ath).toLocaleString()}`}</p>
			</td>

			<td colSpan={1}>
				<p className="info-header">All Time High Date</p>
				<p className="info-value">{dateFormat(new Date(crypto.ath_date), 'dd/mm/yyyy')}</p>
			</td>

			<td colSpan={1}>
				<p className="info-header">All Time High Date</p>
				<p className="info-value">{dateFormat(new Date(crypto.ath_date), 'dd/mm/yyyy')}</p>
			</td>

			<td colSpan={2}>
				<div className="info-section">
					<p>
						{loading ? (
							'LOADING...'
						) : (
							<>
								<p>
									<p className="info-header">Price 30d</p>
								</p>
								<div className="chart-wrapper">
									<Chart
										xPrices={xPrices}
										yPrices={yPrices}
										isActive={isActive()}
									/>
								</div>
							</>
						)}
					</p>
				</div>
			</td>
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
						<p>
							<canvas className="chart-hidden"></canvas>
						</p>
					</div>
				</div>
			</td>
		</tr>
	);

	return <>{isActive() ? visibleInfo : hiddenInfo}</>;
};

export default TableInfo;
