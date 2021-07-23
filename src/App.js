import { useState, useEffect } from 'react';

import Nav from './components/nav/Nav';
import SearchBar from './components/search/SearchBar';
import CryptoTable from './components/table/CryptoTable';
import Footer from './components/footer/Footer';
import LoaderLarge from './components/loaders/LoaderLarge';

import { currencies } from './utils/FormatValues';

function App() {
	const [cryptos, setCryptos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filteredCryptos, setFileredCryptos] = useState([]);
	const [activeCurrency, setActiveCurrency] = useState(
		JSON.parse(localStorage.getItem('activeCurrency')) || currencies[0] /* usd */
	);
	const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode')));

	useEffect(() => {
		const getCryptoData = async () => {
			setLoading(true);
			const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.code}&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h%2C7d`;
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
		<>
			<Nav
				activeCurrency={activeCurrency}
				setActiveCurrency={setActiveCurrency}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
			/>
			<div className="container">
				<SearchBar cryptos={cryptos} setFileredCryptos={setFileredCryptos} />
				{loading && <LoaderLarge darkMode={darkMode} />}
				{!loading && (
					<CryptoTable
						filteredCryptos={filteredCryptos}
						activeCurrency={activeCurrency}
						darkMode={darkMode}
					/>
				)}
			</div>
			<Footer darkMode={darkMode} />
		</>
	);
}

export default App;
