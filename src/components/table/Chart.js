import React from 'react';
import { Line } from 'react-chartjs-2';

const chart = ({ xPrices, yPrices }) => {
	const getColor = () => {
		let firstPrice = yPrices[0];
		let currePrice = yPrices[yPrices.length - 1];

		let color = firstPrice < currePrice ? '#00b239' : '#ff1e19';
		return color;
	};

	getColor();

	const data = {
		labels: xPrices,
		datasets: [
			{
				data: yPrices,
				fill: false,
				borderColor: getColor(),
			},
		],
	};

	const options = {
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
				width={120}
				height={66}
				data={data}
				options={options}
			/>
		</>
	);
};

export default chart;
