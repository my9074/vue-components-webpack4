'use strict'
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const config = require('./config')

const webpackConfig = merge(baseConfig, {
	mode: 'production',
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: 'sk-element.min.js',
		library: {
			root: 'SKElement',
			commonjs: 'sk-element'
		},
		libraryTarget: 'umd'
	},
	externals: config.baseExternals
})

module.exports = webpackConfig
