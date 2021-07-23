import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ToTop = () => {
	const [active, setActive] = useState(false);

	window.addEventListener('scroll', () => {
		let pageY = window.pageYOffset;
		pageY > 450 && setActive(true);
		pageY < 450 && setActive(false);
	});

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div
			tabIndex={active ? 0 : -1}
			onClick={scrollToTop}
			onKeyPress={scrollToTop}
			className={`to-top-button ${active ? 'active' : ''}`}
		>
			<FontAwesomeIcon icon={faChevronUp} />
		</div>
	);
};

export default ToTop;
