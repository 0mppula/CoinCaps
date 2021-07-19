import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/loaders/Loaders.css';
import './components/table/Table.css';
import './components/controls/SearchBar.css';
import './components/nav/Nav.css';

import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
