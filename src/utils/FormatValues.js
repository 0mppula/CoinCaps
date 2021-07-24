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
