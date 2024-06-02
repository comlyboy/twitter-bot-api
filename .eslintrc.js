module.exports = {
	root: true,
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	extends: [
		'airbnb-typescript/base',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.eslint.json',
		// tsconfigRootDir: __dirname,
		// sourceType: 'module',
	},
	rules: {
		'lines-between-class-members': ["error", "never"],
		"consistent-type-definitions": ["error", "never"],
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/lines-between-class-members": "error"
	},
};
