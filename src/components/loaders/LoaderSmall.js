import React from 'react';
import logo from '../../images/logo/logo.png';

const Loader = () => {
	return (
		<div className="chart-loader-wrapper-small">
			<img src={logo} alt="Loading..." />
			<p className="loading">Loading...</p>
		</div>
	);
};

export default Loader;
