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
    sidebarDepth: 0,
		lastUpdated: true,
		sidebar: [
			'/',
			['/quickstart', 'Quick Start'],
			{
				title: 'components',
				collapsable: false,
				children: [['/components/text', 'Text']]
			}
		]
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@', resolve('src'))
  }
}
