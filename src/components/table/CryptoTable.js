import React from 'react';
import TableItem from './TableItem';
import TableHeaders from './TableHeaders';
import './Table.css';
import TableInfo from './TableInfo';

const CryptoTable = ({ filteredCryptos }) => {
	return (
		<div className="crypto-table">
			<table>
				<thead>
					<TableHeaders />
				</thead>
				<tbody>
					{filteredCryptos.map((crypto) => (
						<>
							<TableItem key={crypto.id} crypto={crypto} />
							<TableInfo />
						</>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CryptoTable;
