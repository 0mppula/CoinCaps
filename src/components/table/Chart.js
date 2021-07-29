import React from 'react';
import { Line } from 'react-chartjs-2';

const chart = ({ xPrices, yPrices, darkMode }) => {
	const getColor = () => {
		let firstPrice = yPrices[0];
		let currePrice = yPrices[yPrices.length - 1];
		let danger = darkMode ? '#f96767' : '#ab141c';
		let success = darkMode ? '#12cc2f' : '#096a19';

		let color = firstPrice < currePrice ? success : danger;
		return color;
	};

	const data = {
		labels: xPrices,
		datasets: [
			{
				data: yPrices,
				fill: true,
				borderColor: getColor(),
				backgroundColor: getColor(),
			},
		],
	};

	const options = {
		maintainAspectRatio: false,
		responsive: true,
		plugins: {
			tooltip: {
				enabled: false,
			},
			legend: false,
		},
		elements: {
			point: {
				pointRadius: 0,
				pointHoverRadius: 0,
			},
		},
		scales: {
			y: {
				display: false,
				suggestedMax: Math.max(...yPrices) * 1.03,
			},
			x: {
				display: false,
			},
		},
	};

	return (
		<>
			<Line
				id="chart"
				className="chart"
				// width={140}
				// height={66}
				data={data}
				options={options}
			/>
		</>
	);
};

export default chart;
