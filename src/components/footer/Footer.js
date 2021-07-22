import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo_dark from '../../images/branding/logo_dark.png';
import logo_light from '../../images/branding/logo_light.png';

const Footer = ({ darkMode }) => {
	return (
		<div className="footer">
			<div className="footer-top">
				<div className="footer-brand-section">
					<div className="brand">
						<img
							className="footer-logo"
							src={darkMode ? logo_dark : logo_light}
							alt="logo"
						/>
						<h2>
							<span>C</span>oin <span>C</span>aps
						</h2>
					</div>

					{/* <p>Developed by Omar Kraidié.</p> */}
				</div>
				<div className="footer-info-section">
					<h2>Technologies</h2>
					<div>
						<a
							href="https://www.coingecko.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>CoinGecko API</p>
						</a>
						<a
							href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>JavaScript</p>
						</a>
						<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
							<p>Node.js</p>
						</a>
						<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
							<p>React</p>
						</a>
						<a
							href="https://www.chartjs.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>Chart.js</p>
						</a>
						<a
							href="https://fontawesome.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>Font Awesome</p>
						</a>
					</div>
				</div>
				<div className="footer-info-section">
					<h2>Developer</h2>
					<div>
						<a
							href="https://github.com/0mppula/Coin_Caps"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>GitHub Repository</p>
						</a>
						<a
							href="https://omars-portfolio.netlify.app/projects.html"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>Projects Portfolio</p>
						</a>
						<a
							href="https://csgo-weapons.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>Project: CS:GO Weapons</p>
						</a>
						<a
							href="https://polishcow.netlify.app/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>Project: Dancing Polish Cow</p>
						</a>
					</div>
				</div>
				<div className="footer-info-section">
					<h2>Other</h2>
					<div>
						<a href="https://www.jamk.fi/" target="_blank" rel="noopener noreferrer">
							<p>Jyväskylä University of Applied Sciences</p>
						</a>
						<a
							href="https://www.coingecko.com/api_terms"
							target="_blank"
							rel="noopener noreferrer"
						>
							<p>CoinGecko API Terms of Service</p>
						</a>
						<a href="." target="_blank">
							<p>Documentation</p>
						</a>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-icons">
					<a href="https://github.com/0mppula" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon className="footer-icon icon" icon={faGithub} />
					</a>
					<a
						href="https://www.linkedin.com/in/omar-kraidi%C3%A9-b7a8141a8/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon className="footer-icon icon" icon={faLinkedin} />
					</a>
					<a
						href="https://twitter.com/OmarKraidie"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon className="footer-icon icon" icon={faTwitter} />
					</a>
					<a
						href="https://www.youtube.com/channel/UCdpM1SUen7ZxX2owolyIGyQ"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon className="footer-icon icon" icon={faYoutube} />
					</a>
				</div>
				<p>Developed by Omar Kraidié.</p>
				<p>
					Copyright <span className="copyright">2021&copy;</span> Lahti, Finland. All
					Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
