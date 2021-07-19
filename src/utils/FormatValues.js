export const formatPrice = (value, locale, currency) => {
	let price;
	if (value) {
		if (value < 0.0001) {
			price = new Intl.NumberFormat(locale, {
				style: 'currency',
				currency: currency,
				maximumFractionDigits: 6,
			}).format(value);
		} else if (value < 1000) {
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
