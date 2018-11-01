const path = require('path')

function resolve(dir) {
	return path.join(__dirname, '../..', dir)
}

module.exports = {
	host: 'hosting.jdcloud.com',
	base: '/vue-components-webpack4/',
	title: 'sk-element components',
	description: 'sk-element UI components',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		lastUpdated: true,
		nav: [
			{ text: 'Home', link: '/components/' },
			{
				text: 'Contributing Guide',
				items: [
					{
						text: 'Design Concepts',
						link: '/design/'
					},
					{
						text: 'FAQ',
						link: '/guide/FAQ'
					}
				]
			},
			{
				text: 'Github',
				link: 'https://github.com/my9074/vue-components-webpack4'
			}
		],
		sidebar: {
			'/components/': [
				'',
				['quickstart', 'Quick Start'],
				['i18n', 'Internationalization'],
				{
					title: 'components',
					collapsable: false,
					children: [['text', 'Text']]
				}
			],
			'/guide/': ['FAQ'],
			'/design/': [['', 'Design Concepts']]
		}
	},
	chainWebpack: (config, isServer) => {
		config.resolve.alias.set('@', resolve('src'))
	},
	plugins: [
		[
			require('./plugins/proxy-plugin.js'),
			{
				targets: {
					'/api': {
						target: 'http://hosting.jdcloud.com:3001',
						changeOrigin: true
					}
				}
			}
		]
	]
}
