import React, { Fragment, useState } from 'react';
import TableItem from './TableItem';
import TableHeaders from './TableHeaders';
import TableInfo from './TableInfo';
import './Table.css';

const CryptoTable = ({ filteredCryptos }) => {
	const [active, setActive] = useState('');

	const toggle = (i) => {
		if (active === i) {
			return setActive('');
		}
		setActive(i);
	};

	return (
		<div className="crypto-table">
			<table>
				<thead>
					<TableHeaders key={Math.random * 10} />
				</thead>
				<tbody>
					{filteredCryptos.map((crypto) => (
						<Fragment key={`${crypto.id}_id`}>
							<TableItem
								key={crypto.id}
								crypto={crypto}
								active={active}
								setActive={() => toggle(crypto.id)}
							/>
							<TableInfo key={`${crypto.id}_info`} crypto={crypto} active={active} />
						</Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CryptoTable;
