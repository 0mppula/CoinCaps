import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkToggler = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		toggleDarkMode();
	}, [darkMode]);

	const toggleDarkMode = () => {
		let primaryBg = '--clr-background-primary';
		let primaryBgColor = darkMode ? '#212121' : '#fafafa';

		let secondaryBg = '--clr-background-secondary';
		let secondaryBgColor = darkMode ? '#282828' : '#fafafa';

		let primaryTxt = '--clr-text-primary';
		let primaryTxtColor = darkMode ? '#fafafa' : '#1b1b1b';

		let secondaryText = '--clr-text-secondary';
		let secondaryTextColor = darkMode ? '#fafafa' : '#1b1b1b50';

		let hover = '--clr-hover';
		let hoverColor = darkMode ? '#353535' : '#f0f0f0';

		document.documentElement.style.setProperty(primaryBg, primaryBgColor);
		document.documentElement.style.setProperty(secondaryBg, secondaryBgColor);
		document.documentElement.style.setProperty(primaryTxt, primaryTxtColor);
		document.documentElement.style.setProperty(secondaryText, secondaryTextColor);
		document.documentElement.style.setProperty(hover, hoverColor);
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
