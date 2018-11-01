'use strict'
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: 'vue/dist/vue.runtime.js',
			'@': resolve('src'),
			package: resolve('package')
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: resolve('node_modules')
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	],
	node: {
		setImmediate: false,
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}
