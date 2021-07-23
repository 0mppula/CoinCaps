import React, { useState } from 'react';
import Link from './Link';
import Icon from './Icon';

import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import logo_dark from '../../images/branding/logo_dark.png';
import logo_light from '../../images/branding/logo_light.png';

const Footer = ({ darkMode }) => {
	const [year] = useState(new Date(Date.now()).getFullYear());

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
				</div>
				<div className="footer-links-container">
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Technologies</h2>
						</div>
						<div>
							<Link
								url={'https://developer.mozilla.org/en-US/docs/Web/JavaScript'}
								text={'JavaScript'}
							/>
							<Link url={'https://nodejs.org/'} text={'Node.js'} />
							<Link url={'https://reactjs.org/'} text={'React'} />
							<Link
								url={'https://developer.mozilla.org/en-US/docs/Web/CSS'}
								text={'CSS'}
							/>
							<Link
								url={'https://developer.mozilla.org/en-US/docs/Web/HTML'}
								text={'HTML'}
							/>
						</div>
					</div>
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Resources</h2>
						</div>
						<div>
							<Link url={'https://www.coingecko.com/'} text={'CoinGecko API'} />
							<Link url={'https://www.chartjs.org/'} text={'Chart.js'} />
							<Link url={'https://fontawesome.com/'} text={'Font Awesome'} />
							<Link url={'https://www.flaticon.com/'} text={'Flaticon'} />
							<Link url={'https://icons8.com/'} text={'Icons8'} />
						</div>
					</div>
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Developer</h2>
						</div>
						<div>
							<Link
								url={'https://github.com/0mppula/Coin_Caps'}
								text={'GitHub Repository'}
							/>
							<Link
								url={'https://omars-portfolio.netlify.app/projects.html'}
								text={'Projects Portfolio'}
							/>
							<Link
								url={'https://csgo-weapons.netlify.app/'}
								text={'Project: CS:GO Weapons'}
							/>
							<Link
								url={'https://polishcow.netlify.app/'}
								text={'Project: Dancing Polish Cow'}
							/>
							<Link
								url={'https://www.coingecko.com/api_terms'}
								text={'CoinGecko API Terms of Service'}
							/>
						</div>
					</div>
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Other</h2>
						</div>
						<div>
							<Link
								url={'https://www.jamk.fi/'}
								text={'Jyväskylä University of Applied Sciences'}
							/>
							<Link url={'.'} text={'Documentation'} />
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-icons">
					<Icon url={'https://github.com/0mppula'} icon={faGithub} />
					<Icon
						url={'https://www.linkedin.com/in/omar-kraidi%C3%A9-b7a8141a8/'}
						icon={faLinkedin}
					/>
					<Icon url={'https://twitter.com/OmarKraidie'} icon={faTwitter} />
					<Icon
						url={'https://www.youtube.com/channel/UCdpM1SUen7ZxX2owolyIGyQ'}
						icon={faYoutube}
					/>
				</div>
				<p>Developed by Omar Kraidié.</p>
				<p>
					Copyright <span className="copyright">{year}&copy;</span> Lahti, Finland. All
					Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
