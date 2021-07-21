module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		indent: ['error', 'tab'],
		'no-underscore-dangle': 0,
		'no-tabs': 0,
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/prefer-stateless-function': 0,
		'react/jsx-props-no-spreading': 0,
		'react/state-in-constructor': 0,
		'react/prop-types': 0,
		'no-plusplus': 0,
		'no-console': 0,
		'import/extensions': [2, { js: 'always' }],
		'max-classes-per-file': 0,
	},
};
