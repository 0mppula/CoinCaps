import React, { useState } from 'react';
import RowSelector from './RowSelector';

const Pagination = ({
	cryptos,
	cryptopsPerPage,
	setCryptosPerPage,
	setCurrentPage,
	currentPage,
	indexOfFirstCrypto,
	indexOfLastCrypto,
}) => {
	const pageNumbers = [];

	useState(() => {});
	for (let i = 1; i <= Math.ceil(cryptos / cryptopsPerPage); i++) {
		pageNumbers.push(i);
	}

	const handleClick = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className="pagination">
			<div className="page-showing">
				<p>
					Showing {indexOfFirstCrypto + 1} -{' '}
					{indexOfLastCrypto < cryptos ? indexOfLastCrypto : cryptos} out of {cryptos}
				</p>
			</div>
			<ul className="page-numbers">
				{pageNumbers.map((number, i) => (
					<li
						key={i}
						className={currentPage === i + 1 ? 'active' : ''}
						tabIndex={0}
						onKeyPress={() => handleClick(i + 1)}
						onClick={() => handleClick(i + 1)}
					>
						{number}
					</li>
				))}
			</ul>
			<RowSelector cryptopsPerPage={cryptopsPerPage} setCryptosPerPage={setCryptosPerPage} />
		</div>
	);
};

export default Pagination;
