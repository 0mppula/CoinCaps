import React from 'react';

const VisibleInfo = ({ supply, volume, ath, atdh }) => {
	return (
		<tr className="table-info show">
			<td colSpan={8}>
				<div className="flex">
					<div>
						<strong>Circulating:</strong>
						<p>{supply}</p>
					</div>
					<div>
						<strong>Volume:</strong>
						<p>{volume}</p>
					</div>
					<div>
						<strong>All Time high:</strong>
						<p>{ath}</p>
					</div>
					<div>
						<strong>All Time High Date:</strong>
						<p>{atdh}</p>
					</div>
					<div>
						<p>
							<canvas id="chart" className="chart"></canvas>
						</p>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default VisibleInfo;
