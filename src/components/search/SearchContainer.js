import React from 'react';
import SearchBar from './SearchBar';
import Metrics from './Metrics';

export const SearchContainer = ({ cryptos, setFileredCryptos, activeCurrency, darkMode }) => {
	return (
		<div className="search-container">
			<Metrics activeCurrency={activeCurrency} darkMode={darkMode} />
			<SearchBar cryptos={cryptos} setFileredCryptos={setFileredCryptos} />
		</div>
	);
};

export default SearchContainer;
