import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ cryptos, setFileredCryptos, loading, query, setQuery }) => {
	useEffect(() => {
		let bounce = setTimeout(() => {
			let filtered = [...cryptos].filter((crytpo) => {
				return crytpo.name.toLowerCase().includes(query.toLowerCase());
			});

			query ? setFileredCryptos(filtered) : setFileredCryptos(null);
		}, 250);

		return () => clearTimeout(bounce);
	}, [query]);

	const inputRef = useRef();

	const handleInputChange = (e) => {
		let inputVal = e.target.value;
		setQuery(inputVal);
	};

	const handleEsc = (e) => {
		if (e.key === 'Escape' || e.key === 'e scape') {
			setQuery('');
			setFileredCryptos(null);
			inputRef.current.focus();
		}
	};

	const handleClick = () => {
		setQuery('');
		setFileredCryptos(null);
		inputRef.current.focus();
	};

	return (
		<div className="search-bar">
			<input
				tabIndex={0}
				ref={inputRef}
				type="text"
				onChange={handleInputChange}
				onKeyDown={handleEsc}
				value={query}
				placeholder="Search for a crypto..."
				disabled={loading}
			/>
			{query ? (
				<FontAwesomeIcon
					className={loading ? 'icon times loading' : 'icon times'}
					icon={faTimes}
					onClick={handleClick}
				/>
			) : (
				<FontAwesomeIcon
					className={loading ? 'icon search loading' : 'icon search'}
					icon={faSearch}
					onClick={() => inputRef.current.focus()}
				/>
			)}
		</div>
	);
};

export default SearchBar;
