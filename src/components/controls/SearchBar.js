import React from 'react';

const SearchBar = ({ cryptos, setFileredCryptos }) => {
	const handleInputChange = (e) => {
		let inputVal = e.target.value;

		let filtered = [...cryptos].filter((crytpo) => {
			return crytpo.name.toLowerCase().includes(inputVal.toLowerCase());
		});

		inputVal ? setFileredCryptos(filtered) : setFileredCryptos(cryptos);
	};

	return (
		<div>
			<input type="text" onChange={handleInputChange} placeholder="Search for a crypto..." />
		</div>
	);
};

export default SearchBar;
