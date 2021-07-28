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
		let dots = String.fromCharCode(parseInt('2026', 16));

		if (allPageNumbers.length > 6) {
			if (currentPage < 5) {
				// Pages 1 --> 4
				let slice = allPageNumbers.slice(0, 5);
				temp = [...slice, dots, allPageNumbers.length];
			} else if (currentPage > 4 && currentPage + 2 < allPageNumbers.length) {
				// Pages 4 --> last Page - 3
				let slice = allPageNumbers.slice(currentPage - 2, currentPage + 1);
				temp = [1, dots, ...slice, dots, allPageNumbers.length];
			} else if (currentPage + 2 === allPageNumbers.length) {
				// last Page - 2
				let slice = allPageNumbers.slice(currentPage - 3, currentPage + 1);
				temp = [1, dots, ...slice, allPageNumbers.length];
			} else if (currentPage + 1 === allPageNumbers.length) {
				// last Page - 1
				let slice = allPageNumbers.slice(currentPage - 4, currentPage);
				temp = [1, dots, ...slice, allPageNumbers.length];
			} else if (currentPage === allPageNumbers.length) {
				// last Page
				let slice = allPageNumbers.slice(currentPage - 5, currentPage);
				temp = [1, dots, ...slice];
			}
		} else {
			temp = [...allPageNumbers];
		}

		setCustomPageNumbers(temp);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, cryptopsPerPage]);

	const handleClick = (page, index) => {
		const skipper = String.fromCharCode(parseInt('2026', 16));
		!isNaN(page) && setCurrentPage(page);
		page === skipper && index !== 1 && setCurrentPage((prev) => prev + 2); /* next skipper */
		page === skipper && index === 1 && setCurrentPage((prev) => prev - 2); /* prev skipper */
	};

	// Next/Prev Buttons
	const PrevBtn = () => (
		<li
			tabIndex={`${currentPage > 1 && 0}`}
			className={`next-prev-page ${currentPage < 2 ? 'disabled' : ''}`}
			onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
		>
			<FontAwesomeIcon icon={faChevronLeft} />
		</li>
	);

	const NextBtn = () => (
		<li
			tabIndex={`${currentPage < allPageNumbers.length && 0}`}
			className={`next-prev-page ${currentPage >= allPageNumbers.length ? 'disabled' : ''}`}
			onClick={() =>
				setCurrentPage((prev) => (prev < allPageNumbers.length ? prev + 1 : prev))
			}
		>
			<FontAwesomeIcon icon={faChevronRight} />
		</li>
	);

	return (
		<div className="pagination">
			<div className="page-showing">
				<p>
					{`Showing ${indexOfFirstCrypto + 1} - ${
						indexOfLastCrypto < cryptos ? indexOfLastCrypto : cryptos
					} out of ${cryptos}`}
				</p>
			</div>
			<ul className="page-selector">
				<PrevBtn />
				{customPageNumbers.map((number, i) => (
					<li
						key={i}
						className={currentPage === number ? 'active' : ''}
						tabIndex={0}
						onKeyPress={() => handleClick(number, i)}
						onClick={() => handleClick(number, i)}
					>
						{number}
					</li>
				))}
				<NextBtn />
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
