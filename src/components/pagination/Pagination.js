import React, { useState, useEffect, useRef } from 'react';
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
	const [pageLimit, setPageLimit] = useState(5);
	const [maxPageLimit, setMaxPageLimit] = useState(5);
	const [minPageLimit, setMinPageLimit] = useState(1);
	const pageNumbers = [];

	// useEffect(() => {
	// 	if (currentPage > 3) {
	// 		setMaxPageLimit((prev) => prev + 1);
	// 		setMinPageLimit((prev) => prev + 1);
	// 	}
	// }, [currentPage]);

	const handleNext = () => {
		setCurrentPage((prev) => prev + 1);
	};
	const handlePrev = () => {
		console.log('prev');
		setCurrentPage((prev) => prev - 1);
	};

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
			<ul className="page-selector">
				{currentPage > 1 && (
					<li className="next-prev-page">
						<FontAwesomeIcon
							icon={faChevronLeft}
							// onClick={() => setCurrentPage((prev) => prev - 1)}
							onClick={() => handlePrev()}
						/>
					</li>
				)}
				{currentPage > 3 && <li>...</li>}
				{pageNumbers.map((number, i) => {
					if (number <= maxPageLimit && number >= minPageLimit) {
						return (
							<li
								key={i}
								className={currentPage === i + 1 ? 'active' : ''}
								tabIndex={0}
								onKeyPress={() => handleClick(i + 1)}
								onClick={() => handleClick(i + 1)}
							>
								{number}
							</li>
						);
					}
					{
						/* {pageNumbers.map((number, i) => (
							<li
							key={i}
							className={currentPage === i + 1 ? 'active' : ''}
							tabIndex={0}
							onKeyPress={() => handleClick(i + 1)}
							onClick={() => handleClick(i + 1)}
							>
							{number}
							</li>
							))} */
					}
				})}
				{currentPage < pageNumbers.length && <li>...</li>}
				{currentPage < pageNumbers.length && (
					<li
						className="next-prev-page"
						// onClick={() => setCurrentPage((prev) => prev + 1)}
						onClick={() => handleNext()}
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
