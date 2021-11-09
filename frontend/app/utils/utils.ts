import numbro from 'numbro';

export function isNumber (value: string) {
	const reg = /^[0-9\b]+$/;
	return (value === '' || reg.test(value));
}

export function isValidAge (value: string) {
	return (isNumber(value) && value.length < 3);
}

export function sanitizeCurrency(value: number, options?: {}) {
	return numbro(value).formatCurrency({
		mantissa: 2,
		currencySymbol: '€',
		currencyPosition: 'postfix',
		spaceSeparated: true,
		thousandSeparated: true,
		...options
	});
}
