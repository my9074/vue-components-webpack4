module.exports = {
	presets: ['@vue/babel-preset-app'],
	env: {
		utils: {
			presets: [
				['@vue/babel-preset-app', { modules: 'commonjs', useBuiltIns: false }]
			],
			plugins: [
				[
					'module-resolver',
					{
						root: ['sk-element-webpack'],
						alias: {
							'@': 'sk-element-webpack/dist'
						}
					}
				]
			]
		}
	}
}
