import SearchBar from './SearchBar';
import Metrics from './Metrics';

export const SearchContainer = ({
	cryptos,
	setFileredCryptos,
	activeCurrency,
	currentCryptos,
	darkMode,
	loading,
	query,
	setQuery,
}) => {
	return (
		<div className="search-container">
			<Metrics activeCurrency={activeCurrency} darkMode={darkMode} />
			<SearchBar
				cryptos={cryptos}
				setFileredCryptos={setFileredCryptos}
				currentCryptos={currentCryptos}
				loading={loading}
				query={query}
				setQuery={setQuery}
			/>
		</div>
	);
};

export default SearchContainer;
