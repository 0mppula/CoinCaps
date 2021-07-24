import React from 'react';

const Pagination = ({ activeCurrency, cryptopsPerPage }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(activeCurrency / cryptopsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="pagination">
			<ul className="pages">
				{pageNumbers.map((number, i) => (
					<li key={i}>
						<a href="!#">{i}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pagination;
