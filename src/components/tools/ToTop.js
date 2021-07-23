import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ToTop = () => {
	return (
		<div className="to-top-button">
			<FontAwesomeIcon icon={faChevronUp} />
		</div>
	);
};

export default ToTop;
