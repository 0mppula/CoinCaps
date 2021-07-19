export const formatPrice = (value, locale, currency) => {
	let price;
	if (value < 1000) {
		price = new Intl.NumberFormat(locale, {
			style: 'currency',
			currency: currency,
			maximumFractionDigits: 4,
		}).format(value);
	} else {
		price = new Intl.NumberFormat(locale, {
			style: 'currency',
			currency: currency,
		})
			.format(value)
			.replace(/(\.|,)\d+$/g, '');
	}

	return price;
};

export const formatPercent = (number) => `${number.toFixed(2)}%`;
