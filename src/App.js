import { useState, useEffect } from 'react';

import Nav from './components/nav/Nav';
import SearchContainer from './components/search/SearchContainer';
import CryptoTable from './components/table/CryptoTable';
import Footer from './components/footer/Footer';
import LoaderLarge from './components/loaders/LoaderLarge';
import Pagination from './components/pagination/Pagination';
import ToTop from './components/tools/ToTop';

import { currencies } from './utils/Currencies';

function App() {
	const [cryptos, setCryptos] = useState([]);
	const [currentCryptos, setCurrentCryptos] = useState([]);
	const [filteredCryptos, setFileredCryptos] = useState(null);
	const [activeCurrency, setActiveCurrency] = useState(
		JSON.parse(localStorage.getItem('activeCurrency')) || currencies[0] /* usd */
	);
	const [loading, setLoading] = useState(true);
	const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmode')) || false);
	// Query
	const [query, setQuery] = useState('');
	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [cryptopsPerPage, setCryptosPerPage] = useState(25);
	const indexOfLastCrypto = currentPage * cryptopsPerPage;
	const indexOfFirstCrypto = indexOfLastCrypto - cryptopsPerPage;

	useEffect(() => {
		const getCryptoData = async () => {
			setLoading(true);
			const temp = [];

			let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
				activeCurrency.code
			}&order=market_cap_desc&per_page=250&page=${1}&sparkline=false&price_change_percentage=24h%2C7d`;
			const response = await fetch(url);
			const data = await response.json();
			temp.push(...data);

			const slicedData = temp.slice(indexOfFirstCrypto, indexOfLastCrypto);
			setCryptos(temp);
			setCurrentCryptos(slicedData);
			setLoading(false);
		};

		getCryptoData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeCurrency]);

	useEffect(() => {
		window.scrollTo(0, 0);
		setCurrentCryptos(cryptos.slice(indexOfFirstCrypto, indexOfLastCrypto));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, cryptopsPerPage]);

	useEffect(() => {
		window.scrollTo(0, 0);
		setFileredCryptos('');
	}, [darkMode, activeCurrency]);

	return (
		<>
			<Nav
				activeCurrency={activeCurrency}
				setActiveCurrency={setActiveCurrency}
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				setQuery={setQuery}
			/>

			<div className="container">
				<SearchContainer
					cryptos={cryptos}
					setFileredCryptos={setFileredCryptos}
					activeCurrency={activeCurrency}
					currentCryptos={currentCryptos}
					darkMode={darkMode}
					loading={loading}
					query={query}
					setQuery={setQuery}
				/>
				{loading && <LoaderLarge darkMode={darkMode} />}
				{!loading && (
					<CryptoTable
						filteredCryptos={filteredCryptos}
						activeCurrency={activeCurrency}
						currentCryptos={currentCryptos}
						darkMode={darkMode}
					/>
				)}
				{!filteredCryptos && !loading && (
					<Pagination
						cryptos={cryptos.length}
						cryptopsPerPage={cryptopsPerPage}
						setCryptosPerPage={setCryptosPerPage}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						indexOfFirstCrypto={indexOfFirstCrypto}
						indexOfLastCrypto={indexOfLastCrypto}
					/>
				)}
			</div>
			<Footer darkMode={darkMode} />
			<ToTop />
		</>
	);
}

export default App;
