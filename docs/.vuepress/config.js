module.exports = {
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
	}
}
