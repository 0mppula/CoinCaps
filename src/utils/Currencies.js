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
