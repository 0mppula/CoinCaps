import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ cryptos, setFileredCryptos }) => {
	const [query, setQuery] = useState('');
	const inputRef = useRef();

	const handleInputChange = (e) => {
		let inputVal = e.target.value;
		setQuery(inputVal);

		let filtered = [...cryptos].filter((crytpo) => {
			return crytpo.name.toLowerCase().includes(inputVal.toLowerCase());
		});

		inputVal ? setFileredCryptos(filtered) : setFileredCryptos(cryptos);
	};

	const handleEsc = (e) => {
		if (e.key === 'Escape' || e.key === 'e scape') {
			setQuery('');
			setFileredCryptos(cryptos);
			inputRef.current.focus();
		}
	};

	const handleClick = () => {
		setQuery('');
		setFileredCryptos(cryptos);
		inputRef.current.focus();
	};

	return (
		<div className="search-bar">
			<input
				ref={inputRef}
				type="text"
				onChange={handleInputChange}
				onKeyDown={handleEsc}
				value={query}
				placeholder="Search for a crypto..."
			/>
			{query ? (
				<FontAwesomeIcon className="icon times" icon={faTimes} onClick={handleClick} />
			) : (
				<FontAwesomeIcon
					className="icon search"
					icon={faSearch}
					onClick={() => inputRef.current.focus()}
				/>
			)}
		</div>
	);
};

export default SearchBar;
