import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkToggler = ({ darkMode, setDarkMode, burgerActive, setQuery }) => {
	useEffect(() => {
		toggleDarkMode();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [darkMode]);

	const toggleDarkMode = () => {
		let body = document.body;
		darkMode === true ? body.classList.add('darkmode') : body.classList.remove('darkmode');
		localStorage.setItem('darkmode', darkMode);
		setQuery('');
	};

	let w = window.innerWidth;

	return (
		<div
			className="darkmode-wrapper"
			tabIndex={w > 768 || burgerActive ? 0 : null}
			onKeyPress={() => setDarkMode(!darkMode)}
			onClick={() => setDarkMode(!darkMode)}
		>
			<FontAwesomeIcon className="icon moon m-6" icon={darkMode ? faSun : faMoon} />
			<span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
		</div>
	);
};

export default DarkToggler;
