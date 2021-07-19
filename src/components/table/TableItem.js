import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { formatPercent, formatPrice } from '../../utils/FormatValues';

const CryptoItem = ({ crypto, active, setActive, activeCurrency }) => {
	const handleClick = (id) => {
		setActive(id);
	};

	const getPriceChangeClass = (change) => {
		if (change > 0) {
			return 'success';
		} else if (change < 0) {
			return 'danger';
		} else {
			return 'no-change';
		}
	};

	return (
		<tr className="table-item">
			<td>{crypto.market_cap_rank}</td>
			<td>
				<img src={crypto.image} alt={`${crypto.name} icon`} />
			</td>
			<td>{crypto.symbol.toUpperCase()}</td>
			<td>{crypto.name}</td>
			<td>
				{formatPrice(crypto.market_cap, activeCurrency.locale, activeCurrency.currency)}
			</td>
			<td>
				{formatPrice(crypto.current_price, activeCurrency.locale, activeCurrency.currency)}
			</td>
			<td className={getPriceChangeClass(crypto.price_change_percentage_24h_in_currency)}>
				{formatPercent(crypto.price_change_percentage_24h_in_currency)}
			</td>
			<td className={getPriceChangeClass(crypto.price_change_percentage_7d_in_currency)}>
				{formatPercent(crypto.price_change_percentage_7d_in_currency)}
			</td>
			<td className="drop-info-icon">
				<FontAwesomeIcon
					icon={faChevronUp}
					className={`icon ${active === crypto.id ? 'hide-info' : 'show-info'}`}
					onClick={() => handleClick(crypto.id)}
				/>
			</td>

			<td
				className={`${active === crypto.id ? 'border-bottom active' : 'border-bottom '}`}
			></td>
		</tr>
	);
};

export default CryptoItem;
