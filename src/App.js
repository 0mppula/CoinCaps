import { useState, useEffect } from 'react';
import SearchBar from './components/search/SearchBar';
import CryptoTable from './components/table/CryptoTable';
import Nav from './components/nav/Nav';
import LoaderLarge from './components/loaders/LoaderLarge';

function App() {
	const [cryptos, setCryptos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredCryptos, setFileredCryptos] = useState([]);
	const [activeCurrency, setActiveCurrency] = useState({
		name: 'dollar',
		code: 'usd',
		locale: 'en-US',
	});
	const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode')));

	useEffect(() => {
		const getCryptoData = async () => {
			setLoading(true);
			const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.code}&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h%2C7d`;
			const response = await fetch(url);
			const data = await response.json();
			setCryptos(data);
			setFileredCryptos(data);
			setLoading(false);
		};

		getCryptoData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeCurrency]);

	return (
		<div className="container">
			<Nav
				activeCurrency={activeCurrency}
				setActiveCurrency={setActiveCurrency}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
			/>
			<SearchBar cryptos={cryptos} setFileredCryptos={setFileredCryptos} />
			{loading ? (
				<LoaderLarge darkMode={darkMode} />
			) : (
				<CryptoTable
					filteredCryptos={filteredCryptos}
					activeCurrency={activeCurrency}
					darkMode={darkMode}
				/>
			)}
		</div>
	);
}

export default App;
