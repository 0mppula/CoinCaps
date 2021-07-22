import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fabGithub } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-top">
				<div className="brand">
					<h2>BRAND</h2>
					<p>LOGO</p>
					<p>NAME</p>
				</div>
				<div className="technologies">
					<h2>TECHNOLOGIES</h2>
					<p>REACT</p>
					<p>CHART.JS</p>
					<p>GOIN GECKO API</p>
				</div>
				<div className="developer">
					<h2>DEVELOPER</h2>
					<p>OMAR KRAIDIE</p>
					<p>GITHUB</p>
					<p>LINKED IN</p>
				</div>
				<div className="School">
					<h2>SCHOOL</h2>
					<p>JAMK</p>
					<p>FINLAND</p>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-icons">
					<FontAwesomeIcon className="footer-icon icon" icon={faGithub} />
					<FontAwesomeIcon className="footer-icon icon" icon={faGithub} />
					<FontAwesomeIcon className="footer-icon icon" icon={faGithub} />
					<FontAwesomeIcon className="footer-icon icon" icon={faGithub} />
				</div>
				<p>Lorem ipsum dolor sit amet. &copy;</p>
			</div>
		</div>
	);
};

export default Footer;
