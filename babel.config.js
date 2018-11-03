module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: 'false',
				exclude: ['transform-regenerator'],
				debug: true
			}
		]
	],
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
