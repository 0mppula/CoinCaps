/* Currency image files */
import usdSymbol from '../images/currencies/usd.svg';
import eurSymbol from '../images/currencies/euro.svg';
import gbpSymbol from '../images/currencies/pound.svg';
import yenSymbol from '../images/currencies/yen.svg';
import btcSymbol from '../images/currencies/btc.png';
import ethSymbol from '../images/currencies/ethereum.png';

/* Data for supported currencies */
export const currencies = [
	{ name: 'dollar', code: 'usd', symbol: '$', locale: 'en-US', img: usdSymbol },
	{ name: 'euro', code: 'eur', symbol: '€', locale: 'fi-FI', img: eurSymbol },
	{ name: 'pound ', code: 'gbp', symbol: '£', locale: 'en-US', img: gbpSymbol },
	{ name: 'yen', code: 'jpy', symbol: '¥', locale: 'en-US', img: yenSymbol },
	{ name: 'bitcoin', code: 'btc', symbol: '₿', locale: 'en-US', img: btcSymbol },
	{ name: 'etherium', code: 'eth', symbol: 'Ξ', locale: 'en-US', img: ethSymbol },
];

export const formatPrice = (value, locale, code) => {
	let price;
	if (value) {
		if (value < 0.0001) {
			price = new Intl.NumberFormat(locale, {
				style: 'currency',
				currency: code,
				maximumFractionDigits: 6,
			}).format(value);
		} else if (value < 1000) {
			price = new Intl.NumberFormat(locale, {
				style: 'currency',
				currency: code,
				maximumFractionDigits: 4,
			}).format(value);
		} else {
			price = new Intl.NumberFormat(locale, {
				style: 'currency',
				currency: code,
			})
				.format(value)
				.replace(/(\.|,)\d+\s+€$/g, ' €')
				.replace(/(\.|,)\d{2}$/g, '');
		}
		return price;
	} else {
		return 'No data...';
	}
};

export const formatPercent = (number) => {
	if (number) {
		return 'No data...' && `${number.toFixed(2)}%`;
	} else {
		return 'No data...';
	}
};

export const formatDate = (date) => {
	let formattedDate = 'No Date available...';

	let dateObj = new Date(date);
	if (dateObj.getMonth && typeof dateObj.getMonth === 'function') {
		let yyyy = dateObj.getFullYear();
		let mm = dateObj.getMonth() + 1;
		let dd = dateObj.getDate();
		/* Zero padd dates */
		if (mm < 10) mm = `0${mm}`;
		if (dd < 10) dd = `0${dd}`;

		formattedDate = [dd, mm, yyyy].join('/') || 'No date available';
	}

	return formattedDate;
};

export const usdConfig = {
	name: 'dollar',
	code: 'usd',
	locale: 'en-US',
	img: '/static/media/usd.bba48499.svg',
	symbol: '$',
};
