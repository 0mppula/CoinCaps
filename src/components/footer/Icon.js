import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ url, icon }) => {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<FontAwesomeIcon className="footer-icon icon" icon={icon} />
		</a>
	);
};

export default Icon;
