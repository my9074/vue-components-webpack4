const path = require('path')

function resolve(dir) {
	return path.join(__dirname, '../..', dir)
}

module.exports = {
	base: '/vue-components-webpack4/',
	title: 'sk-element components',
	description: 'sk-element UI components',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		repo: 'my9074/vue-components-webpack4',
		sidebarDepth: 0,
		lastUpdated: true,
		nav: [
			{ text: 'Home', link: '/components/' },
			{
				text: 'Contributing Guide',
				items: [{ text: 'FAQ', link: '/guide/FAQ' }]
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
			'/guide/': [
        {
					title: 'FAQ',
					collapsable: false,
					children: [['FAQ', 'How to create a new components?']]
				}
      ]
		}
	},
	chainWebpack: (config, isServer) => {
		config.resolve.alias.set('@', resolve('src'))
	}
}
