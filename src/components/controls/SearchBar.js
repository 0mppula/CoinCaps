import React, { useState } from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ cryptos, setFileredCryptos }) => {
	const [query, setQuery] = useState('');

	const handleInputChange = (e) => {
		let inputVal = e.target.value;
		setQuery(inputVal);

		let filtered = [...cryptos].filter((crytpo) => {
			return crytpo.name.toLowerCase().includes(inputVal.toLowerCase());
		});

		inputVal ? setFileredCryptos(filtered) : setFileredCryptos(cryptos);
	};

	return (
		<div className="search-bar">
			<input type="text" onChange={handleInputChange} placeholder="Search for a crypto..." />
			{query ? (
				<FontAwesomeIcon className="icon times" icon={faTimes} />
			) : (
				<FontAwesomeIcon className="icon search" icon={faSearch} />
			)}
		</div>
	);
};

export default SearchBar;
