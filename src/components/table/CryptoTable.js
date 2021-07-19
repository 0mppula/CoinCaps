import React, { Fragment, useState } from 'react';
import TableItem from './TableItem';
import TableHeaders from './TableHeaders';
import TableInfo from './TableInfo';

const CryptoTable = ({ filteredCryptos, activeCurrency }) => {
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
				<TableHeaders key={Math.random * 10} />
				<tbody>
					<tr className="table-margin-top"></tr>
					{filteredCryptos.map((crypto) => (
						<Fragment key={`${crypto.id}_id`}>
							<TableItem
								key={crypto.id}
								crypto={crypto}
								active={active}
								activeCurrency={activeCurrency}
								setActive={() => toggle(crypto.id)}
							/>
							<TableInfo
								key={`${crypto.id}_info`}
								crypto={crypto}
								active={active}
								activeCurrency={activeCurrency}
							/>
						</Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CryptoTable;
