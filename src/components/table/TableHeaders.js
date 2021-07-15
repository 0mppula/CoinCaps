import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const TableHeaders = () => {
	const [infoOpen, setInfoOpen] = useState(false);

	const handleClick = (e) => {
		setInfoOpen(!infoOpen);
	};

	return (
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
	);
};

export default TableHeaders;
