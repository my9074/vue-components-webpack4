module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: 'false',
				debug: true
			}
		]
	],
	plugins: ['@babel/plugin-transform-runtime'],
	env: {
		utils: {
			presets: [['@babel/preset-env', { modules: 'commonjs' }]],
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
