module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: 'false'
			}
		]
	],
	plugins: [
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-object-assign',
		'@babel/plugin-transform-regenerator'
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
