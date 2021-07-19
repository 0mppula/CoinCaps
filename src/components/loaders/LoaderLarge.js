import React from 'react';
import logo from '../../images/logo.png';

const LoaderLarge = () => {
	return (
		<div className="chart-loader-wrapper-large">
			<img src={logo} alt="Loading..." />
			<p className="loading">Loading...</p>
		</div>
	);
};

export default LoaderLarge;
