const path = require('path')
const components = require('../../components.json')
const uppercamelcase = require('uppercamelcase')

function resolve(dir) {
	return path.join(__dirname, '../..', dir)
}

function generatorComponents(components) {
	return Object.keys(components).map(cm => [cm, uppercamelcase(cm)])
}

module.exports = {
	host: 'hosting.jdcloud.com',
	base: '/vue-components-webpack4/',
	title: 'sk-element components',
	description: 'sk-element UI components',
	markdown: {
		lineNumbers: true
	},
	locales: {
		'/': {
			lang: 'en-US',
			title: 'sk-element',
			description: 'Vue UI Components'
		},
		'/zh/': {
			lang: 'zh-CN',
			title: 'sk-element',
			description: 'Vue 组件库模板'
		}
	},
	themeConfig: {
		lastUpdated: true,
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				lastUpdated: 'Last Updated',
				nav: require('./nav/en'),
				sidebar: {
					'/components/': [
						'',
						['quickstart', 'Quick Start'],
						['i18n', 'Internationalization'],
						{
							title: 'components',
							collapsable: false,
							children: generatorComponents(components)
						}
					],
					'/guide/': ['FAQ'],
					'/design/': [['', 'Design Concepts']]
				}
			},
			'/zh/': {
				label: '简体中文',
				selectText: '选择语言',
				lastUpdated: '上次更新',
				nav: require('./nav/zh'),
				sidebar: {
					'/zh/components/': [
						'',
						['quickstart', '快速上手'],
						['i18n', '国际化'],
						{
							title: 'components',
							collapsable: false,
							children: generatorComponents(components)
						}
					],
					'/zh/guide/': ['FAQ'],
					'/zh/design/': [['', '设计理念']]
				}
			}
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
					'/api/mfaIntercept/(.*)': {
						target: 'http://hosting.jdcloud.com:3001',
						changeOrigin: true
					}
				}
			}
		]
	]
}
