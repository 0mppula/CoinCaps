import React, { Fragment } from 'react';
import TableItem from './TableItem';
import TableHeaders from './TableHeaders';
import './Table.css';
import TableInfo from './TableInfo';

const CryptoTable = ({ filteredCryptos }) => {
	return (
		<div key={Math.random() * 10} className="crypto-table">
			<table>
				<thead>
					<TableHeaders key={Math.random * 10} />
				</thead>
				<tbody>
					{filteredCryptos.map((crypto) => (
						<Fragment key={`${crypto.id}_id`}>
							<TableItem key={crypto.id} crypto={crypto} />
							<TableInfo key={`${crypto.id}_info`} />
						</Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CryptoTable;
