import React from 'react';

const Link = ({ url, text }) => {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<p>{text}</p>
		</a>
	);
};

export default Link;
