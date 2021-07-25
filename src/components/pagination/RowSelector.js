import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const RowSelector = ({ cryptopsPerPage, setCryptosPerPage }) => {
	const [listOpen, setListOpen] = useState(false);
	const rows = [25, 50, 100];

	const handleClick = (row) => {
		setCryptosPerPage(row);
	};

	useEffect(() => {
		let handler = (e) => {
			if (!listRef.current.contains(e.target) && listOpen) {
				setListOpen(false);
			}
		};

		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	});

	const listRef = useRef();

	return (
		<div className="row-selector">
			<p>Show Rows: </p>
			<div
				className="row"
				tabIndex={0}
				onKeyPress={() => setListOpen(!listOpen)}
				onClick={() => setListOpen(!listOpen)}
			>
				<p>{cryptopsPerPage}</p>
				<FontAwesomeIcon icon={faSortDown} />
			</div>
			<ul ref={listRef} className={`row-list ${listOpen ? 'active' : ''}`}>
				{rows.map((row, i) => (
					<li
						key={i}
						className="row-item"
						tabIndex={0}
						onKeyPress={() => handleClick(row)}
						onClick={() => handleClick(row)}
					>
						{row}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RowSelector;
