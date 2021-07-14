import React from 'react';

const CryptoList = ({ filteredCryptos }) => {
	return (
		<div>
			<ul>
				{filteredCryptos.map((c) => (
					<li key={c.id}>{c.name}</li>
				))}
			</ul>
		</div>
	);
};

export default CryptoList;
