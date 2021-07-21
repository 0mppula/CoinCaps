import React from 'react';
import logo_light from '../../images/logo/logo_light.png';
import logo_dark from '../../images/logo/logo_dark.png';

const Loader = ({ darkMode }) => {
	return (
		<div className="chart-loader-wrapper-small">
			<img src={darkMode === true ? logo_dark : logo_light} alt="Loading..." />
			<p className="loading">Loading...</p>
		</div>
	);
};

export default Loader;
