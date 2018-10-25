var path = require('path')
var fs = require('fs')
var Components = require('../components.json')

var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'))
var apiList = fs.readdirSync(path.resolve(__dirname, '../src/api'))
var externals = {}

Object.keys(Components).forEach(function(key) {
	externals[`packages/${key}`] = `sk-element-webpack/dist/${key}`
})

externals['@/locale'] = 'sk-element-webpack/dist/locale'
mixinsList.forEach(function(file) {
	file = path.basename(file, '.js')
	externals[`@/mixins/${file}`] = `sk-element-webpack/dist/mixins/${file}`
})

apiList.forEach(function(file) {
	file = path.basename(file, '.js')
	externals[`@/api/${file}`] = `sk-element-webpack/dist/api/${file}`
})

externals = [Object.assign({
	vue: 'vue',
	axios: 'axios'
}, externals)]

exports.baseExternals = {
	vue: {
		root: 'Vue',
		commonjs: 'vue',
		commonjs2: 'vue',
		amd: 'vue'
	},
	axios: 'axios'
}

exports.externals = externals
