/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */
const { override, addBabelPlugin } = require('customize-cra')

module.exports = {
	webpack: override(
		process.env.NODE_ENV === 'production'
			? addBabelPlugin('transform-remove-console')
			: false
	),
}
