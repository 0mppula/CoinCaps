import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkToggler = ({ darkMode, setDarkMode }) => {
	useEffect(() => {
		toggleDarkMode();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [darkMode]);

	const toggleDarkMode = () => {
		let body = document.body;
		darkMode === true ? body.classList.add('darkmode') : body.classList.remove('darkmode');
		localStorage.setItem('darkmode', darkMode);
	};

	return (
		<div
			tabIndex={0}
			onKeyPress={() => setDarkMode(!darkMode)}
			onClick={() => setDarkMode(!darkMode)}
			className="icon-wrapper"
		>
			<FontAwesomeIcon className="icon moon m-6" icon={darkMode ? faSun : faMoon} />
		</div>
	);
};

export default DarkToggler;
