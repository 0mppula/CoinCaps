import React from 'react';
import logo_light from '../../images/branding/logo_light.png';
import logo_dark from '../../images/branding/logo_dark.png';

const LoaderLarge = ({ darkMode }) => {
	return (
		<div className="chart-loader-wrapper-large">
			<img src={darkMode === true ? logo_dark : logo_light} alt="Loading..." />
			<p className="loading">Loading Cryptos...</p>
		</div>
	);
};

export default LoaderLarge;
