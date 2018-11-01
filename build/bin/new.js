'use strict'
/* eslint-disable no-console */
console.log()
process.on('exit', () => {
	console.log()
})

if (!process.argv[2]) {
	console.error('[组件名]必填 - Please enter new component name')
	process.exit(1)
}

const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const componentname = process.argv[2]
const ComponentName = uppercamelcase(componentname)
const PackagePath = path.resolve(__dirname, '../../packages', componentname)
const PackageDocsPath = path.resolve(__dirname, '../../docs/components')
const Files = [
	{
		filename: 'index.js',
		content: `import ${ComponentName} from './src/main'

/* istanbul ignore next */
${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName})
}

export default ${ComponentName}`
	},
	{
		filename: 'src/main.vue',
		content: `<template>
  <div></div>
</template>

<script>
export default {
  name: 'Sk${ComponentName}'
}
</script>`
	},
	{
		filename: path.join(
			'../../packages/theme-default/src',
			`${componentname}.less`
		),
		content: `@import "common/var";

@${componentname}-prefix-cls: ~"@{css-prefix}${componentname}";`
	}
]

// add to components.json
const componentsFile = require('../../components.json')
if (componentsFile[componentname]) {
	console.error(`${componentname} 已存在.`)
	process.exit(1)
}
componentsFile[componentname] = `./packages/${componentname}/index.js`
fileSave(path.join(__dirname, '../../components.json'))
	.write(JSON.stringify(componentsFile, null, '  '), 'utf8')
	.end('\n')

// 创建 package
Files.forEach(file => {
	fileSave(path.join(PackagePath, file.filename))
		.write(file.content, 'utf8')
		.end('\n')
})

// 创建组件文档
fileSave(path.join(PackageDocsPath, `${componentname}.md`))
	.write(`# ${ComponentName}`, 'utf8')
	.end('\n')

console.log('DONE!')
