import React, { useState, useEffect } from 'react';
import RowSelector from './RowSelector';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pagination = ({
	cryptos,
	cryptopsPerPage,
	setCryptosPerPage,
	setCurrentPage,
	currentPage,
	indexOfFirstCrypto,
	indexOfLastCrypto,
}) => {
	const [customPageNumbers, setCustomPageNumbers] = useState([]);
	let allPageNumbers = [];

	for (let i = 1; i <= Math.ceil(cryptos / cryptopsPerPage); i++) {
		allPageNumbers.push(i);
	}

	useEffect(() => {
		let temp;
		let dots = '…';

		if (allPageNumbers.length > 6) {
			if (currentPage < 5) {
				let slice = allPageNumbers.slice(0, 5);
				temp = [...slice, dots, allPageNumbers.length];
			} else if (currentPage > 4 && currentPage + 2 < allPageNumbers.length) {
				let slice = allPageNumbers.slice(currentPage - 2, currentPage + 1);
				temp = [1, dots, ...slice, dots, allPageNumbers.length];
			} else if (currentPage + 2 === allPageNumbers.length) {
				let slice = allPageNumbers.slice(currentPage - 3, currentPage + 1);
				temp = [1, dots, ...slice, allPageNumbers.length];
			} else if (currentPage + 1 === allPageNumbers.length) {
				let slice = allPageNumbers.slice(currentPage - 3, currentPage);
				temp = [1, dots, ...slice, allPageNumbers.length];
			} else if (currentPage === allPageNumbers.length) {
				temp = [1, dots, currentPage - 3, currentPage - 2, currentPage - 1, currentPage];
			}
		} else {
			temp = [...allPageNumbers];
		}

		setCustomPageNumbers(temp);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, cryptopsPerPage]);

	const handleClick = (page) => {
		!isNaN(page) && setCurrentPage(page);
	};

	return (
		<div className="pagination">
			<div className="page-showing">
				<p>
					Showing {indexOfFirstCrypto + 1} -{' '}
					{indexOfLastCrypto < cryptos ? indexOfLastCrypto : cryptos} out of {cryptos}
				</p>
			</div>
			<ul className="page-selector">
				{currentPage > 1 && (
					<li
						className="next-prev-page"
						onClick={() => setCurrentPage((prev) => prev - 1)}
					>
						<FontAwesomeIcon icon={faChevronLeft} />
					</li>
				)}

				{customPageNumbers.map((number, i) => (
					<li
						key={i}
						className={currentPage === number ? 'active' : ''}
						tabIndex={0}
						onKeyPress={() => handleClick(number)}
						onClick={() => handleClick(number)}
					>
						{number}
					</li>
				))}

				{currentPage < allPageNumbers.length && (
					<li
						className="next-prev-page"
						onClick={() => setCurrentPage((prev) => prev + 1)}
					>
						<FontAwesomeIcon icon={faChevronRight} />
					</li>
				)}
			</ul>
			<RowSelector
				cryptopsPerPage={cryptopsPerPage}
				setCryptosPerPage={setCryptosPerPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
};

export default Pagination;
