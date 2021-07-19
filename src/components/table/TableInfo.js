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
			<td colSpan={8}>
				<div className="info-container">
					<div className="info-section">
						<strong>Circulating:</strong>
						<p>{`${parseInt(crypto.circulating_supply).toLocaleString()}`}</p>
					</div>

					<div className="info-section">
						<strong>Volume:</strong>
						<p className="value">{`${parseInt(
							crypto.total_volume
						).toLocaleString()}`}</p>
					</div>

					<div className="info-section">
						<strong>All Time High:</strong>
						<p className="value">{`$${parseInt(crypto.ath).toLocaleString()}`}</p>
					</div>

					<div className="info-section">
						<strong>All Time High Date:</strong>
						<p className="value">
							{dateFormat(new Date(crypto.ath_date), 'dd/mm/yyyy')}
						</p>
					</div>

					<div className="info-section">
						<p>
							{loading ? (
								'LOADING...'
							) : (
								<Chart xPrices={xPrices} yPrices={yPrices} isActive={isActive()} />
							)}
						</p>
					</div>
				</div>
			</td>
		</tr>
	);
	const hiddenInfo = (
		<tr className="table-info">
			<td colSpan={8}>
				<div className="info-container">
					<div>
						<strong>{'\u00A0'}</strong>
						<p>{'\u00A0'}</p>
					</div>
					<div>
						<strong>{'\u00A0'}</strong>
						<p>{'\u00A0'}</p>
					</div>
					<div>
						<strong>{'\u00A0'}</strong>
						<p>{'\u00A0'}</p>
					</div>
					<div>
						<strong>{'\u00A0'}</strong>
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
