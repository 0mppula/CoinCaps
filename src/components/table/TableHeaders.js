import React from 'react';

const TableHeaders = () => {
	return (
		<>
			<thead>
				<tr className="table-headers">
					<th className="rank">Rank</th>
					<th className="img"></th>
					<th className="symbol">Symbol</th>
					<th className="name">Name</th>
					<th className="market">Market Cap</th>
					<th className="price">Price</th>
					<th className="price-change">24h</th>
					<th className="price-change">7d</th>
					<th className="info">&nbsp;&nbsp;</th>
				</tr>
			</thead>
			<tr className="thead-border-bottom">
				<td></td>
			</tr>
			<tr>
				<td className="thead-gap-bottom"></td>
			</tr>
		</>
	);
};

export default TableHeaders;
