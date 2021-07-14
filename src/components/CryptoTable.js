import React from 'react';
import TableItem from './TableItem';
import TableHeaders from './TableHeaders';

const CryptoTable = ({ filteredCryptos }) => {
	return (
		<div>
			<table>
				<thead>
					<TableHeaders />
				</thead>
				<tbody>
					{filteredCryptos.map((crypto) => (
						<TableItem key={crypto.id} crypto={crypto} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CryptoTable;
